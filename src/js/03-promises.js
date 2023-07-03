'use strict';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(amount, initialDelay, step) {
  const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = initialDelay + i * step;
    const promise = createPromise(position, delay);
    promises.push(promise);
  }

  return promises;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);
  const amount = parseInt(inputAmount.value);

  createPromises(amount, delay, step)
    .then(results => {
      results.forEach(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      });
    })
    .catch(results => {
      results.forEach(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    });
});
