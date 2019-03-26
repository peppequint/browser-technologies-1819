let timeoutHandle;
const countdown = minutes => {
  let seconds = 60;
  const mins = minutes;
  function tick() {
    const counter = document.querySelector(".countdown");
    let currentMinute = mins - 1;
    seconds--;
    counter.textContent =
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

document.querySelector(".start-btn").addEventListener(
  "click",
  () => {
    countdown(3);
  },
  false
);
