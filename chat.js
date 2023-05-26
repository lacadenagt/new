const chatContainer = document.getElementById('chat-container');
const chatWindow = document.getElementById('chat-window');
const chatIcon = document.getElementById('chat-icon');
const closeButton = document.getElementById('close-button');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let chatVisible = false;

// Mostrar/ocultar el chat al hacer clic en el ícono o el botón de cerrar
function toggleChat() {
  chatVisible = !chatVisible;
  chatWindow.style.display = chatVisible ? 'block' : 'none';
}

// Enviar mensaje al chatbot
function sendMessage() {
  const userMessage = messageInput.value;
  displayMessage(userMessage, 'user');
  // Lógica para enviar el mensaje al chatbot y recibir una respuesta
  // Aquí puedes usar la API de Watson Assistant o cualquier otra plataforma de chatbot

  messageInput.value = '';
}

// Mostrar mensaje en el chat
function displayMessage(message, sender) {
  const chatDisplay = document.getElementById('chat-display');
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Eventos para mostrar/ocultar el chat y enviar mensajes
chatIcon.addEventListener('click', toggleChat);
closeButton.addEventListener('click', toggleChat);

// Mostrar el chat después de un retraso de 2 segundos
setTimeout(() => {
  toggleChat();
}, 2000);
