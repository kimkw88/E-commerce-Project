const { ObjectID } = require("mongodb");
const express = require("express");
const router = express.Router();
const Order = require("../model/Order");
const assert = require("assert");
const path = require("path");

const objectId = new ObjectID();

router.get("/orders", (req, res) => {
  if (!req.session.userEmail) {
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  }
});

router.get("/orders/find/:userId", async (req, res) => {
  try {
    const order = await Order.find();
    res.write(`
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
    <h2>Your Orders</h2>
    <table id="cartTable">
      <tbody>
        <tr>
          <th>User ID</th>
          <th>Product ID</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Address</th>
          <th>Status</th>
        </tr>`);

    for (let i = 0; i < order.length; i++) {
      if (order[i].userId === req.params.userId) {
        res.write(`
          <tr>
            <td>${order[i].userId}</td>
            <td>${order[i].productId}</td>
            <td>${order[i].title}</td>
            <td>${order[i].quantity}</td>
            <td>$${order[i].amount}</td>
            <td>${order[i].address}</td>
            <td>${order[i].status}</td>
          </tr>`);
      }
    }

    res.write(`</tbody></table>`);
    res.end();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = router;
