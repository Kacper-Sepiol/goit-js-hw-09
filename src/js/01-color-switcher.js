'use strict';

const buttonStart = document.querySelector('.button-start');
const buttonStop = document.querySelector('.button-stop');
const body = document.querySelector('body');
let randomBackgroundColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  randomBackgroundColor = setInterval(() => {
    const backgroundColor = getRandomHexColor();
    body.style.backgroundColor = backgroundColor;
    buttonStart.setAttribute('disabled', '');
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  clearInterval(randomBackgroundColor);
  buttonStart.removeAttribute('disabled');
});
