const time = document.getElementsByClassName("countdown")[0];
time.textContent = 3 + ":" + "0" + 0;

const start = document.querySelector(".start-btn");
start.addEventListener(
  "click",
  () => {
    start.textContent = "pause";
    start.classList.add("pause-btn");
    startTimer();
  },
  false
);

const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", () => {
  time.textContent = 3 + ":" + "0" + 0;
});

const startTimer = () => {
  let time = document.querySelector(".countdown").textContent;
  let timeSplit = time.split(/[:]+/);
  let minutes = timeSplit[0];
  let seconds = changeSecond(timeSplit[1] - 1);
  if (seconds == 59) {
    minutes = minutes - 1;
  }

  document.querySelector(".countdown").textContent = minutes + ":" + seconds;
  setTimeout(startTimer, 1000);
};

const changeSecond = second => {
  if (second < 10 && second >= 0) {
    second = "0" + second;
  }
  if (second < 0) {
    second = "59";
  }
  return second;
};
