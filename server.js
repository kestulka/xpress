const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("miau");
  res.status(500).send("bye");
});

app.listen(3000);
