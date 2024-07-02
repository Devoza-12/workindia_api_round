require("dotenv").config();
const express = require("express");
const app = express();
const signupRouter = require("./api/signup/signup.routers");
const loginRouter = require("./api/login/login.router");
const createRouter = require("./api/shorts/create/create.router");
const feedRouter = require("./api/shorts/feed/feed.router");

app.use(express.json());

app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
app.use("/api/shorts/create", createRouter);
app.use("/api/shorts/feed", feedRouter);

const port = process.env.APP_PORT ;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});