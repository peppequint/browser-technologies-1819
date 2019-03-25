// TODO: progressive enhancement and feature detection has to be in concept
// TODO: express server with post method form
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));

const score = ["Tst1", "Tst2"];

app.post("/score", (req, res) => {
  const newScore = req.body.newScore;

  score.push(newScore);
  console.log("Test");

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("Hello scoreboard");
});

app.listen(port, () => console.log(`Live scoreboard running on port ${port}.`));
