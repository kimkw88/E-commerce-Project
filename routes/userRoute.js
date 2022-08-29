const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const path = require("path");

router.get("/", (req, res) => {
  if (!req.session.userEmail) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  } else {
    res.send(`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="stylesheets/style.css">
    <header>
      <div class="container">
        <a href="/"><h3 class="logo">AWESOMEBUY</h3></a>
        <nav>
          <ul>
            <li>Welcome ${req.session.userName}!</li>
            <li><a href="/">Home</a></li>
            <li><a href="/carts/find/${req.session.userName}">Cart</a></li>
            <li><a href="/orders/find/${req.session.userName}"">My Order</a></li>
            <li></li>
            <li>
              <form method="post" action="/logout">
                <button id="logout">Logout</button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="gallery-container"></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="javascripts/products.js"></script>
  `);
  }
});

module.exports = router;
