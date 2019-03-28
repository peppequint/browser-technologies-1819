const homeBtnPlus = document.querySelector(".counter-home > .counter-plus");
const homeBtnMinus = document.querySelector(".counter-home > .counter-minus");
const awayBtnPlus = document.querySelector(".counter-away > .counter-plus");
const awayBtnMinus = document.querySelector(".counter-away > .counter-minus");

let homeScore = document.querySelector(".score-home > .score-number");
let awayScore = document.querySelector(".score-away > .score-number");

const statusNotification = document.querySelector(".status-notification");
const statusMessage = document.querySelector(".status-message");

function plusScoreHome() {
  homeScore.textContent++;
  console.log("Score team 1 | " + homeScore.textContent + " punten.");
}

function minusScoreHome() {
  homeScore.textContent--;
  console.log("Score team 1 | " + homeScore.textContent + " punten.");
}

function plusScoreAway() {
  awayScore.textContent++;
  console.log("Score team 2 | " + awayScore.textContent + " punten.");
}

function minusScoreAway() {
  awayScore.textContent--;
  console.log("Score team 2 | " + awayScore.textContent + " punten.");
}

const status = () => {
  window.addEventListener("offline", event => {
    homeBtnPlus.type = "button";
    homeBtnMinus.type = "button";
    awayBtnPlus.type = "button";
    awayBtnMinus.type = "button";
    console.log("Connection is lost");
    statusNotification.classList.add("offline");
    statusNotification.classList.remove("online");
    statusMessage.textContent = "You have lost connection!";

    homeBtnPlus.addEventListener(
      "click",
      function() {
        plusScoreHome();
      },
      false
    );

    homeBtnMinus.addEventListener(
      "click",
      function() {
        minusScoreHome();
      },
      false
    );

    awayBtnPlus.addEventListener(
      "click",
      function() {
        plusScoreAway();
      },
      false
    );

    awayBtnMinus.addEventListener(
      "click",
      function() {
        minusScoreAway();
      },
      false
    );
  });

  window.addEventListener("online", event => {
    homeBtnPlus.type = "submit";
    homeBtnMinus.type = "submit";
    awayBtnPlus.type = "submit";
    awayBtnMinus.type = "submit";
    console.log("Connection is good");
    statusNotification.classList.add("online");
    statusNotification.classList.remove("offline");
    statusMessage.textContent = "You are currently online";
  });
};

export default status;
