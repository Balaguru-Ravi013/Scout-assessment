const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
    });
});

function toggleChatBox() {
    const chatBox = document.getElementById('chatBox');

    // Toggle visibility
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== '') {
        const messageContainer = document.getElementById('chatMessages');

        // Create new message element
        const newMessage = document.createElement('div');
        newMessage.className = 'message my-message';
        newMessage.innerHTML = `<div class="profile-container">
           <img src="/assests/profile-image.png" alt="Profile Icon" class="profile-icon">
           <span class="status-indicator online"></span>
           </div>
           <div class="message-text-container my-text">
                    <span class="message-text">${messageText}</span>
                    <span class="time-section">10:13pm</span>
                </div>
       `;

        // Append new message to messages container
        messageContainer.appendChild(newMessage);

        // Clear input field
        input.value = '';

        // Scroll to bottom of messages
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

// Hide chat box when clicking outside of it
window.onclick = function (event) {
    const chatBox = document.getElementById('chatBox');
    const chatButton = document.querySelector('.chat-button');

    if (event.target !== chatBox && event.target !== chatButton && !chatBox.contains(event.target)) {
        chatBox.style.display = 'none';
    }
};

