'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate.getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
      document.querySelector('button[date-start]').disabled = true;
    } else {
      document.querySelector('button[date-start]').disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startCountdow() {
  const selectedDate = new Date(
    document.querySelector('#datetime-picker').value
  );
  const countdownElement = document.querySelector('.timer');

  const countdownInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeDifference = selectedDate.getTime() - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "<span class='value'>00</span>".repeat(4);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    countdownElement.querySelector('[data-days]').textContent =
      addLeadingZero(days);
    countdownElement.querySelector('[data-hours]').textContent =
      addLeadingZero(hours);
    countdownElement.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    countdownElement.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

document
  .querySelector('button[data-start]')
  .addEventListener('click', startCountdow);
