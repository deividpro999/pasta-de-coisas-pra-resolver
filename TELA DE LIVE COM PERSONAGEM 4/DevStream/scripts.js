// JavaScript para funcionalidades básicas

// Função para enviar mensagem no chat
document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        const chatBox = document.querySelector('.chat-box');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(userMessage);
        messageInput.value = '';

        // Simular resposta da Emma
        setTimeout(() => {
            const emmaMessage = document.createElement('div');
            emmaMessage.classList.add('message', 'emma-message');
            emmaMessage.innerHTML = `<p>Resposta automática da Emma.</p>`;
            chatBox.appendChild(emmaMessage);
            chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
        }, 1000);

        chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
    }
});