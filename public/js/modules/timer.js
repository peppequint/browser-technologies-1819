let timeoutHandle;

const startBtn = document.querySelector(".start-btn");

const timeCounter = document.querySelector(".countdown");
timeCounter.textContent = "2:00";

const timer = minutes => {
  if (startBtn.getAttribute("data-text-swap") == startBtn.innerHTML) {
    startBtn.innerHTML = startBtn.getAttribute("data-text-original");
    clearTimeout(timeoutHandle);
  } else {
    startBtn.setAttribute("data-text-original", startBtn.innerHTML);
    startBtn.innerHTML = startBtn.getAttribute("data-text-swap");
  }
  let seconds = 60;
  const mins = minutes;
  function tick() {
    let currentMinute = mins - 1;
    seconds--;
    timeCounter.textContent =
      currentMinute.toString() +
      ":" +
      (seconds < 10 ? "0" : "") +
      String(seconds);
    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        setTimeout(function() {
          countdown(mins - 1);
        }, 1000);
      }
    }
  }
  tick();
};

startBtn.addEventListener(
  "click",
  () => {
    timer(2);
  },
  false
);

export default timer;
