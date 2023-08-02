const element = document.querySelector("#typing-animation");
const texts = [" Graphic Designer", "Website Designer", "Freelancer", "3D Designer", "UX/UI Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting && charIndex <= 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  } else if (!isDeleting && charIndex >= currentText.length) {
    isDeleting = true;
  }

  element.innerText = currentText.slice(0, charIndex);
  charIndex += isDeleting ? -1 : 1;

  //   element.style.display = isDeleting ? "none" : "inline";

  const typingSpeed = Math.floor(Math.random() * (110 - 30)) + 30;
  setTimeout(type, typingSpeed);
}

type();