const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const path = require("path");
const jwt = require("jsonwebtoken");
const { ifError } = require("assert");

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/signup.html"));
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log("user._id:", user._id);
    if (!user) {
      console.log("Not found. Please Sign up.");
      res.redirect("/login");
    } else {
      if (!(await bcrypt.compare(password, user.password)))
        throw new Error("Invalid username or password");
      console.log("user:", user);
      console.log("sessionID:", req.sessionID);
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      console.log("req.session:\n", req.session);
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/login");
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, password2 } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new TypeError("This email is already taken");
    } else if (password !== password2) {
      throw new TypeError("Passwords do not match");
    } else {
      req.body.password = await bcrypt.hash(
        req.body.password,
        Number(process.env.SALT)
      );
      req.session.userName = name;
      req.session.userEmail = email;
      await User.create(req.body);

      console.log("Registered successfully");
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/signup");
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    res.clearCookie(process.env.SESS_NAME);
    console.log("logged out");
    res.redirect("/");
  });
});

module.exports = router;
