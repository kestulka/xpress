const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("miau");
  // res.sendStatus(500); // error only
  // res.status(500).send("bye"); // error in console, text in page
  // res.download("server.js"); // initiate download on page load
  res.render("index", { text: "World" }); // line 9 @ index.ejs
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/newPosts", postRouter);

app.listen(3000);
