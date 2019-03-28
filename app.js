const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));

const scoreboard = {
  home: 0,
  away: 0,
  game: 1,
  time: "3:00"
};

app.get("/", (req, res) => {
  res.render("pages/index", { scoreboard: scoreboard });
});

app.post("/homescoreminus", (req, res) => {
  if (scoreboard.home > 0) {
    scoreboard.home--;
  }
  console.log("Score team 1 | " + scoreboard.home + " punten.");
  res.redirect("/");
});

app.post("/homescoreplus", (req, res) => {
  scoreboard.home++;
  console.log("Score team 1 | " + scoreboard.home + " punten.");
  res.redirect("/");
});

app.post("/awayscoreminus", (req, res) => {
  if (scoreboard.away > 0) {
    scoreboard.away--;
  }
  console.log("Score team 2 | " + scoreboard.away + " punten.");
  res.redirect("/");
});

app.post("/awayscoreplus", (req, res) => {
  scoreboard.away++;
  console.log("Score team 2 | " + scoreboard.away + " punten.");
  res.redirect("/");
});

app.listen(port, () => console.log(`Live scoreboard running on port ${port}.`));
