const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;

startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener("click", () => {
  toggleButtons();
  colorSwitcher();

  timerId = setInterval(() => {
    colorSwitcher();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  toggleButtons();
  clearInterval(timerId);
});

function colorSwitcher() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
}

function toggleButtons() {
  startBtn.disabled = !startBtn.disabled;
  stopBtn.disabled = !stopBtn.disabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
