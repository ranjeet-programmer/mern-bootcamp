const express = require("express");

const app = express();

const port = 8000;

app.get("/login", (req, res) => {
  return res.send("Login Route");
});

app.get("/signup", (req, res) => {
  return res.send("SignUp Route");
});

const admin = (req, res) => {
  return res.send("Home Dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("Is Admin is Running");
  next();
};

app.get("/admin", isAdmin, admin);

app.listen(port, () => {
  console.log("Server is running ");
});
