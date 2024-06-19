const adjectives = ["developer", "creative", "collaborator", "agile", "results-oriented", "dedicated"];
let index = 0;
let charIndex = 0;
let currentAdjective = "";
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;

const typingElement = document.querySelector(".typing-effect");

function type() {
    if (charIndex < currentAdjective.length) {
        typingElement.textContent += currentAdjective.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = currentAdjective.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % adjectives.length;
        currentAdjective = adjectives[index];
        setTimeout(type, typingSpeed);
    }
}

function startTyping() {
    currentAdjective = adjectives[index];
    type();
}

document.addEventListener("DOMContentLoaded", startTyping);
