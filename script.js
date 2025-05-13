const languages = {
  c: [
    `#include <stdio.h>;\nint main() {\n   printf("Hello World!");\n   return 0;\n}`,
    `#include <stdio.h>;\nint main() {\n   printf("Click me");\n   return 0;\n}`
  ],
  csharp: [
    `using System;\nclass Program {\n   static void Main() {\n      Console.WriteLine("Hello World!");\n   }\n}`,
    `using System;\nclass Program {\n   static void Main() {\n      Console.WriteLine("Click me!");\n   }\n}`
  ],
  java: [
    `public class Main {\n   public static void main(String[] args) {\n      System.out.println("Hello World!");\n   }\n}`,
    `public class Main {\n   public static void main(String[] args) {\n      System.out.println("Click me!");\n   }\n}`
  ],
  python: [
    `print("Hello World!")`,
    `print("Click me!")`
  ],
  javascript: [
    `console.log("Hello World!");`,
    `console.log("Click me!");`
  ],
  css: [
    `/* Hello World! */\nbody::before {\n   content: 'Hello World!';\n}`,
    `/* Click me! */\nbody::before {\n   content: 'Click me!';\n}`
  ],
  adj: ["developer", "creative", "collaborator", "agile", "results-oriented", "dedicated"]
};

const typingSpeed = 70;
const erasingSpeed = 50;
const delayBetweenWords = 2000;

function createTypingEffect(selector, words) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = words[wordIndex];

    function type() {
      if (charIndex < currentWord.length) {
        element.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetweenWords);
      }
    }

    function erase() {
      if (charIndex > 0) {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        currentWord = words[wordIndex];
        setTimeout(type, typingSpeed);
      }
    }

    type();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(languages).forEach(lang => {
    createTypingEffect(`.typing-effect.${lang}`, languages[lang]);
  });
});


const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
