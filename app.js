// Working with EXPRESS
const express = require("express");

const app = express();

app.use("/greetings", (req, res, next) => {
  res.send("Hello!");
});

app.use("/", (req, res, next) => {
  res.send("Learning");
});

app.listen(3000);
