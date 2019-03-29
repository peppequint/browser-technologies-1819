const newButton = document.querySelector(".start-btn");
const home = document.querySelector("#score-number--home");
const away = document.querySelector("#score-number--away");

const game = document.querySelector(".game-value");
let gameNumber = 1;
game.textContent = "Game " + gameNumber;

newButton.addEventListener(
  "click",
  () => {
    newGame();
    gameNumber++;
  },
  false
);

const newGame = () => {
  home.textContent = 0;
  away.textContent = 0;
};

export default newGame;
