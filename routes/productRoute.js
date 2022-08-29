const { ObjectID } = require("mongodb");
const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const assert = require("assert");
const path = require("path");

const objectId = new ObjectID();

router.get("/products", (req, res) => {
  res.redirect("/");
});

router.get("/products/:brand", async (req, res) => {
  const product = await Product.findOne({ id: req.params.brand });
  // console.log("objectId:", objectId);
  // console.log("sessionID:", req.sessionID);
  req.session._id = product.id;
  req.session.title = product.title;
  req.session.price = product.price;
  console.log("req.session:", req.session);
  if (!req.session.userEmail) {
    res.send(`
    <header>
      <div class="container">
        <a href="/"><h3 class="logo">AWESOMEBUY</h3></a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/carts">Cart</a></li>
            <li><a href="/orders">My Orders</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="product-container">
      <div><img src="${product.img}" style="height: 300px;"/></div>
      <div><h3>${product.title}</h3></div>
      <div><p>Description: ${product.desc}</p></div>
      <div>Categories: ${product.categories}</div>
      <div>Price: ${product.price}</div>
      <div>
        <form method="post" action="/login">
          <button id="addCartBtn">Add Cart</button>
        </form>
      </div>
    </div>

    `);
  } else {
    res.send(`
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
    <div class="product-container">
      <div><img src="${product.img}" style="height: 300px;"/></div>
      <div><h3>${product.title}</h3></div>
      <div><p>Description: ${product.desc}</p></div>
      <div>Categories: ${product.categories}</div>
      <div>Price: ${product.price}</div>
      <div>
        <form method="post" action="/carts/find/${req.session.userName}">
          <button id="addCartBtn">Add Cart</button>
        </form>
      </div>
    </div>
  `);
  }
});

module.exports = router;
