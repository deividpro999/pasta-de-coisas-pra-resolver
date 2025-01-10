document.addEventListener('DOMContentLoaded', () => {
  const character = document.getElementById('character');
  const chatBox = document.getElementById('chat-box');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  
  let posX = 0;
  let posY = 0;
  let scale = 1;
  const moveAmount = 10;
  const zoomAmount = 0.1;

  // Função para mover o personagem
  function moveCharacter(direction) {
    if (direction === 'left') posX -= moveAmount;
    if (direction === 'right') posX += moveAmount;
    if (direction === 'up') posY -= moveAmount;
    if (direction === 'down') posY += moveAmount;

    character.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  // Zoom com a roda do mouse
  function zoomCharacter(event) {
    event.preventDefault();
    if (event.deltaY < 0) scale += zoomAmount;
    else scale -= zoomAmount;
    if (scale < 0.5) scale = 0.5;
    character.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  // Movimentação com as teclas de seta
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') moveCharacter('left');
    if (event.key === 'ArrowRight') moveCharacter('right');
    if (event.key === 'ArrowUp') moveCharacter('up');
    if (event.key === 'ArrowDown') moveCharacter('down');
  });

  // Zoom com a roda do mouse
  document.addEventListener('wheel', zoomCharacter);

  // Função para enviar mensagem
  sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
      messageInput.value = '';
    }
  });

  // Enviar mensagem ao apertar Enter
  messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });
});