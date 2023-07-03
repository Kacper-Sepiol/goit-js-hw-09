'use strict';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step]');
const inputAmount = document.querySelector('input[name="amount]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

form.addEventListener('submit', createPromise);
