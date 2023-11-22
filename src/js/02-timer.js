// Import flatpicr library
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Import Notiflix library
import Notiflix from "notiflix";

// Styles for Notiflix
Notiflix.Notify.init({
  fontSize: "1rem",
  width: "500px",
  cssAnimationStyle: "from-bottom",
});

const startBtn = document.querySelector("button[data-start]");
const resetBtn = document.querySelector("button[data-reset]");
startBtn.disabled = true;
resetBtn.disabled = true;

let endDate = null;
let intervalId;
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates.length > 0) {
      selectedDate = selectedDates[0];

      if (selectedDate > new Date()) {
        startBtn.disabled = false;
        resetBtn.disabled = false;

        const formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }).format(selectedDate);

        Notiflix.Notify.success(`Selected Date: ${formattedDate}`);

        // endDate = selectedDate.getTime();
      } else {
        startBtn.disabled = true;
        resetBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
      }
    }
  },
};

flatpickr("#datetime-picker", options);

document.querySelector("#datetime-picker").value =
  "Enter a future date to begin the countdown";

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

function updateCountdown() {
  if (!endDate) {
    clearInterval(intervalId);
    return;
  }

  const currentDate = new Date().getTime();
  const timeDifference = endDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(intervalId);
    startBtn.disabled = true;
    resetBtn.disabled = true;

    document.querySelector("[data-days]").textContent = "00";
    document.querySelector("[data-hours]").textContent = "00";
    document.querySelector("[data-minutes]").textContent = "00";
    document.querySelector("[data-seconds]").textContent = "00";

    Notiflix.Notify.success("Timer has ended!");

    endDate = null;

    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  document.querySelector("[data-days]").textContent = addLeadingZero(days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
  document.querySelector("[data-minutes]").textContent =
    addLeadingZero(minutes);
  document.querySelector("[data-seconds]").textContent =
    addLeadingZero(seconds);
}

startBtn.addEventListener("click", function () {
  endDate = selectedDate.getTime();

  intervalId = setInterval(updateCountdown, 1000);

  startBtn.disabled = true;
  resetBtn.disabled = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  startBtn.disabled = true;
  resetBtn.disabled = true;

  document.querySelector("#datetime-picker").value =
    "Enter a future date to begin the countdown";
  document.querySelector("[data-days]").textContent = "00";
  document.querySelector("[data-hours]").textContent = "00";
  document.querySelector("[data-minutes]").textContent = "00";
  document.querySelector("[data-seconds]").textContent = "00";

  endDate = null;
});

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}
