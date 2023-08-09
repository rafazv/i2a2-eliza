const defaultPatterns = require('./defaultPatterns'); // Caminho para o arquivo defaultPatterns.js
const express = require('express');
const cors = require('cors');
// const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// const config = new Configuration({ apiKey: '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' });


app.post('/eliza', async (req, res) => {
  const userMessage = req.body.message;
  const elizaResponse = eliza_response(userMessage);

  // if (!elizaResponse) {
  //   const gpt3Response = await generate_gpt3_response(userMessage);
  //   res.json({ response: gpt3Response });
  //   return;
  // }
  res.json({ response: elizaResponse });
});

function eliza_response(user_input) {
  for (const pattern in defaultPatterns) {
    const regex = new RegExp(pattern, 'i');
    const match = user_input.match(regex);
    if (match) {
      const responses = defaultPatterns[pattern];
      const response = responses[Math.floor(Math.random() * responses.length)];
      const capturedGroups = match.slice(1);
      return response.replace(/{(\d+)}/g, (match, index) => capturedGroups[index]);
    }
  }

  // return false;
  return "Sorry, I can't answer this question.";
}

// async function generate_gpt3_response(input_text) {
//   try {
//     const openai = new OpenAIApi(config);
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: input_text,
//       max_tokens: 50,
//       temperature: 0.7
//     });
//     return response.choices[0].text.trim();
//   } catch (error) {
//     console.error("Error generating GPT-3 response:", error);
//     return "Sorry, there was an error generating a response.";
//   }
// }

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
