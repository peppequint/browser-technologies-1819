const homeBtnPlus = document.querySelector(".counter-home > .counter-plus");
const homeBtnMinus = document.querySelector(".counter-home > .counter-minus");
const awayBtnPlus = document.querySelector(".counter-away > .counter-plus");
const awayBtnMinus = document.querySelector(".counter-away > .counter-minus");

const homeScore = document.querySelector("#score-number--home");
const awayScore = document.querySelector("#score-number--away");

var online = true;

let homeScoreNumber = document.querySelector(".score-home > .score-number")
  .textContent;
let awayScoreNumber = document.querySelector(".score-away > .score-number")
  .textContent;

const statusNotification = document.querySelector(".status-notification");
const statusMessage = document.querySelector(".status-message");

function plusScoreHome() {
  homeScoreNumber++;
  if (window.localStorage) {
    localStorage.setItem("Score team 1", homeScoreNumber);
  }
  homeScore.textContent = homeScoreNumber;
  console.log("Score team 1 | " + homeScoreNumber + " punten.");
}

function minusScoreHome() {
  if (homeScoreNumber > 0) {
    homeScoreNumber--;
  }
  if (window.localStorage) {
    localStorage.setItem("Score team 1", homeScoreNumber);
  }
  homeScore.textContent = homeScoreNumber;
  console.log("Score team 1 | " + homeScoreNumber + " punten.");
}

function plusScoreAway() {
  awayScoreNumber++;
  if (window.localStorage) {
    localStorage.setItem("Score team 2", awayScoreNumber);
  }
  awayScore.textContent = awayScoreNumber;
  console.log("Score team 2 | " + awayScoreNumber + " punten.");
}

function minusScoreAway() {
  if (awayScoreNumber > 0) {
    awayScoreNumber--;
  }
  if (window.localStorage) {
    localStorage.setItem("Score team 2", awayScoreNumber);
  }
  awayScore.textContent = awayScoreNumber;
  console.log("Score team 2 | " + awayScoreNumber + " punten.");
}

function get(path, params) {
  var method = "get";

  const form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);

      form.appendChild(hiddenField);
    }
  }
  document.body.appendChild(form);
  form.submit();
}

function reset() {
  homeScoreNumber = 0;
  awayScoreNumber = 0;

  homeScore.innerText = homeScoreNumber;
  awayScore.innerText = awayScoreNumber;

  if (online == true) {
    get("/", {
      homeScore: homeScore.textContent,
      awayScore: awayScore.textContent
    });
  } else {
    console.log(online);
  }
}

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener(
  "click",
  function() {
    reset();
  },
  false
);

const status = () => {
  window.addEventListener("offline", event => {
    online = false;

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
    online = true;
    homeBtnPlus.type = "submit";
    homeBtnMinus.type = "submit";
    awayBtnPlus.type = "submit";
    awayBtnMinus.type = "submit";
    console.log("Connection is good");
    get("/", {
      homeScore: homeScore.textContent,
      awayScore: awayScore.textContent
    });
    statusNotification.classList.add("online");
    statusNotification.classList.remove("offline");
    statusMessage.textContent = "You are currently online";
  });
};

export default status;
