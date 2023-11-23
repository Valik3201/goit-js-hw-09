// Import Notiflix library
import Notiflix from "notiflix";

// Styles for Notiflix
Notiflix.Notify.init({
  fontSize: "1rem",
  width: "450px",
  cssAnimationStyle: "from-bottom",
  closeButton: false,
  useIcon: false,
  pauseOnHover: true,
});

// Select the form element
const form = document.querySelector(".form");

// Event handler for the form submission
function onSubmitForm(event) {
  event.preventDefault();

  // Extracting input values from the form
  const { delay, step, amount } = event.currentTarget.elements;

  // Convert delay and step to numbers
  const initialDelay = parseInt(delay.value);
  const stepValue = parseInt(step.value);

  // Check for valid input values
  if (initialDelay < 0 || stepValue <= 0 || amount.value <= 0) {
    // Display a warning message if any input is not a valid non-negative number
    Notiflix.Notify.warning("❗ Please enter positive value");
  } else {
    // Loop to create and handle promises based on user input
    for (let i = 1; i <= amount.value; i++) {
      // Record the start time
      const startTime = performance.now();

      // Calculate totalDelay for each iteration
      let totalDelay = initialDelay + (i - 1) * stepValue;

      // Creating a promise using the createPromise function
      createPromise(i, totalDelay)
        .then(({ position, delay }) => {
          // Calculate the elapsed time
          const elapsedTime = performance.now() - startTime;
          // Displaying a success notification when the promise is fulfilled
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms (Actual: ${elapsedTime.toFixed(
              0
            )}ms)`
          );
        })
        .catch(({ position, delay }) => {
          // Calculate the elapsed time
          const elapsedTime = performance.now() - startTime;
          // Displaying an error notification when the promise is rejected
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms (Actual: ${elapsedTime.toFixed(
              0
            )}ms)`
          );
        });
    }
  }

  event.currentTarget.reset();
}

// Function to create a promise
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    // Generating a random value to determine whether the promise should be fulfilled or rejected
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

// Adding a submit event listener to the form
form.addEventListener("submit", onSubmitForm);
