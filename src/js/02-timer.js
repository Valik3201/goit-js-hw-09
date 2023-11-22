// Import flatpicr library
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Import Notiflix library
import Notiflix from "notiflix";

// Import Notiflix library one by one
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Block } from "notiflix/build/notiflix-block-aio";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

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
