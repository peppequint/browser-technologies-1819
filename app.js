const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));

app.post("/score", (req, res) => {
  const scoreboard = {
    home: 0,
    away: 0,
    game: 1
  };

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => console.log(`Live scoreboard running on port ${port}.`));
