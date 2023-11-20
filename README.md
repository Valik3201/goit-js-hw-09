# Timers and Time, Promises

This project delves into timers, time calculations, and the usage of promises in JavaScript. It comprises three tasks, each focusing on a distinct aspect of these concepts. The project is set up for automatic deployment to GitHub Pages using GitHub Actions by JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)). The deployment action is configured to push production-ready code into the `gh-pages` branch.

## Color Switcher

### Files: 01-color-switcher.html, 01-color-switcher.js

**Description:**
This task involves creating a color switcher with "Start" and "Stop" buttons. The script changes the background color of the `<body>` once a second to a random value when the "Start" button is clicked. Clicking the "Stop" button halts the color change. Note that the "Start" button is disabled during the color change process.

## Countdown Timer

### Files: 02-timer.html, 02-timer.js

**Description:**
This task focuses on a countdown timer with an interface for selecting an end date. It utilizes [the flatpickr library](https://flatpickr.js.org) for cross-browser date and time selection. The timer starts counting down once the user selects a future date and clicks the "Start" button. The timer interface displays days, hours, minutes, and seconds in the format xx:xx:xx:xx. The timer stops when it reaches 00:00:00:00. To ensure proper functionality, the page needs to be reloaded to select a new date and restart the timer.

## Promise Generator

### Files: 03-promises.html, 03-promises.js

**Description:**
This task involves a promise generator where users input the first delay in milliseconds, the delay increment for each subsequent promise, and the total number of promises to be created. Upon submitting the form, the `createPromise` function is called as many times as specified, creating promises that fulfill or reject after the given delays. The optional notiflix library is suggested for displaying notifications to the user instead of using `console.log()`.

**Note:** For additional practice, [the Notiflix library](https://github.com/notiflix/Notiflix) is enabled to display notifications to the user instead of `console.log()` statements throughout the project.

Explore the project to understand JavaScript timers, date handling, and promises, gaining practical insights into their implementation.
