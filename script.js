const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const Bobby = document.getElementById('Bobby');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const loveEffect = document.querySelector('.love-effect');

const messages = [
    "ハッピーバレンタイン",
    "私との関係を望んでくれてありがとう^^ ",
    "これからも一緒にいられることを願っていますように",
    "よく間違いを犯したらごめんなさい",
   
];



let currentMessageIndex = 0;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {
        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p'); 
        messageElement.classList.add('message'); 
        messageContainer.appendChild(messageElement); 

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                if (currentMessageIndex < messages.length) {
                    setTimeout(showMessageWithTypingAnimation, 1000); 
                }
            }
        }, 100); 
    }
}

function createLoveEffect() {
    const emojis = ["💖", "꒰ᐢ. .ᐢ꒱", "(˶ˆᗜˆ˵)", "(˶˃ ᵕ ˂˶)", "💕", "⸜(｡˃ ᵕ ˂ )⸝♡", "💓", "⁠♡"];
    for (let i = 0; i < 50; i++) { 
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

startButton.addEventListener('click', () => {
    const name = Bobby.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        currentMessageIndex = 0;
        messageContainer.innerHTML = ''; 
        showMessageWithTypingAnimation();
    } else {
        shakeButton();
        alert("enter your name!");
    }
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Flower.html';
});

createLoveEffect();