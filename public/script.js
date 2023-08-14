const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

document.addEventListener("DOMContentLoaded", function() {
  const initialMessage = "Hello! How can I assist you today?";
  addMessage('ELIZA', initialMessage, 'received');
});

sendButton.addEventListener('click', async () => {
  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
    addMessage('You', userMessage);
    userInput.value = '';

    const response = await sendMessageToEliza(userMessage);
    addMessage('ELIZA', response);
  }
});

userInput.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

async function sendMessageToEliza(message) {
  const response = await fetch('https://i2a2-eliza.vercel.app/eliza', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  return data.response;
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messageElement.classList.add(sender.toLowerCase());
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
