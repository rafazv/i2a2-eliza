const defaultPatterns = require('./defaultPatterns');
const express = require('express');
const cors = require('cors');

const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });


app.post('/eliza', async (req, res) => {
  const userMessage = req.body.message;
  const elizaResponse = eliza_response(userMessage);

  if (!elizaResponse) {
  const gpt3Response = await generate_gpt3_response(userMessage);
    res.json({ response: gpt3Response });
    return;
  }
  res.json({ response: elizaResponse });
});

function eliza_response(user_input) {
  for (const pattern in defaultPatterns) {
    const exactRegex = new RegExp(`^${pattern}$`, 'i');
    const matchExact = user_input.match(exactRegex);
    if (matchExact) {
      const responses = defaultPatterns[pattern];
      const response = responses[Math.floor(Math.random() * responses.length)];
      const capturedGroups = matchExact.slice(1);
      return response.replace(/{(\d+)}/g, (match, index) => capturedGroups[index]);
    }
  }

  for (const pattern in defaultPatterns) {
    const contextRegex = new RegExp(pattern, 'i');
    const matchContext = user_input.match(contextRegex);
    if (matchContext) {
      const responses = defaultPatterns[pattern];
      const response = responses[Math.floor(Math.random() * responses.length)];
      const capturedGroups = matchContext.slice(1);
      return response.replace(/{(\d+)}/g, (match, index) => capturedGroups[index]);
    }
  }

  return false;
  // return "I'm here to listen and support you.";
}

async function generate_gpt3_response(input_text) {
  try {
    const openai = new OpenAIApi(config);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a psychologist that loves your patients. You want they know how to solve their own problems thinking with different perspectives." },
        { role: "system", content: "Your psychological approach is cognitive-behavioral therapy." },
        { role: "system", content: "You don't talk about psychological technical subjects." },
        { role: "system", content: "You make questions that encourages your patients to talk." },
        { role: "user", content: input_text }
      ],
      temperature: 0.8,
      max_tokens: 150,
      presence_penalty: 1
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating GPT-3 response:", error);
    return "Sorry, there was an error generating a response.";
  }
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
