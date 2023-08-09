const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', async () => {
  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
    addMessage('You', userMessage);
    userInput.value = '';

    const response = await sendMessageToEliza(userMessage);
    addMessage('ELIZA', response);
  }
});

async function sendMessageToEliza(message) {
  const response = await fetch('http://localhost:3000/eliza', {
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
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
