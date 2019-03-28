const resetButton = document.querySelector(".reset-btn");
const home = document.querySelector("#score-number--home");
const away = document.querySelector("#score-number--away");

resetButton.addEventListener(
  "click",
  () => {
    reset();
  },
  false
);

const reset = () => {
  home.textContent = 0;
  away.textContent = 0;
};

export default reset;
