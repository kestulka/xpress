const express = require("express");
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.send("posts list");
});

postsRouter.get("/newPosts", (req, res) => {
  res.send("new posts form");
});

module.exports = postsRouter;
