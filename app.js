const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));

let scoreHome = 0;
let scoreAway = 0;

app.get("/", (req, res) => {
  if (req.query.homeScore) {
    scoreHome = req.query.homeScore;
    scoreAway = req.query.awayScore;
  } else {
    console.log("Nothing to render");
  }
  res.render("pages/index", { scoreHome: scoreHome, scoreAway: scoreAway });
});

app.post("/homescoreplus", (req, res) => {
  scoreHome++;
  console.log("Score team 1 | " + scoreHome + " punten.");
  res.render("pages/index", { scoreHome: scoreHome, scoreAway: scoreAway });
});

app.post("/homescoreminus", (req, res) => {
  if (scoreHome > 0) {
    scoreHome--;
  }
  console.log("Score team 1 | " + scoreHome + " punten.");
  res.render("pages/index", { scoreHome: scoreHome, scoreAway: scoreAway });
});

app.post("/awayscoreplus", (req, res) => {
  scoreAway++;
  console.log("Score team 2 | " + scoreAway + " punten.");
  res.render("pages/index", { scoreHome: scoreHome, scoreAway: scoreAway });
});

app.post("/awayscoreminus", (req, res) => {
  if (scoreAway > 0) {
    scoreAway--;
  }
  console.log("Score team 2 | " + scoreAway + " punten.");
  res.render("pages/index", { scoreHome: scoreHome, scoreAway: scoreAway });
});

app.listen(port, () => console.log(`Live scoreboard running on port ${port}.`));
