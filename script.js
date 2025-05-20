document.addEventListener('DOMContentLoaded', function() {
  const currentYearSpan = document.getElementById('currentYear');
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;
});

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

const typingSpeed = 50;
const erasingSpeed = 25;
const delayBetweenWords = 2500;

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


const logo = document.getElementById('logo');
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const certifications = document.getElementById('certifications');
const contact = document.getElementById('contact');

logo.addEventListener('click', () => {
  const section1 = document.getElementById('section1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

home.addEventListener('click', () => {
  const section1 = document.getElementById('section1');
  section1.scrollIntoView({ behavior: 'smooth' });
});
about.addEventListener('click', () => {
  const section2 = document.getElementById('section2');
  section2.scrollIntoView({ behavior: 'smooth' });
}); 
skills.addEventListener('click', () => {
  const section3 = document.getElementById('section3');
  section3.scrollIntoView({ behavior: 'smooth' });
}); 
projects.addEventListener('click', () => {
  const section4 = document.getElementById('section4');
  section4.scrollIntoView({ behavior: 'smooth' });
}); 
certifications.addEventListener('click', () => {
  const section5 = document.getElementById('section5');
  section5.scrollIntoView({ behavior: 'smooth' });
}); 
contact.addEventListener('click', () => {
  const section6 = document.getElementById('section6');
  section6.scrollIntoView({ behavior: 'smooth' });
});


const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
