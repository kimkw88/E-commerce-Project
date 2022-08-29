const { ObjectID } = require("mongodb");
const express = require("express");
const router = express.Router();
const Cart = require("../model/Cart");
const Order = require("../model/Order");
const assert = require("assert");
const path = require("path");

const objectId = new ObjectID();

router.get("/carts", (req, res) => {
  if (!req.session.userEmail) {
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  }
});

router.get("/carts/find/:userId", async (req, res) => {
  // console.log("req.session:", req.session);
  // console.log("req.params.userId:", req.params.userId);
  try {
    const cart = await Cart.find();
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
    <h2>Shopping Cart</h2>
    <table id="cartTable">
      <tbody>
        <tr>
          <th>User ID</th>
          <th>Product ID</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>`);
    for (let i = 0; i < cart.length; i++) {
      res.write(`
      <tr>
        <td>${cart[i].userId}</td>
        <td>${cart[i].productId}</td>
        <td>${cart[i].title}</td>
        <td>${cart[i].quantity}</td>
        <td>${cart[i].price}</td>
      </tr>`);
    }
    res.write(`</tbody></table>`);
    res.write(`
    <div>
      <div id="checkoutContainer">
        <h2>Check Out</h2>
        <form method="post" action="/carts/find/${req.params.userId}/checkout">
          <label for="firstName">First Name: </label>
          <input name="firstname" id="firstName" placeholder="First Name" required/><br/>
          <label for="lastName">Last Name: </label>
          <input name="lastname" id="lastName" placeholder="Last Name" required/><br/>
          <label for="checkoutEmail">Email: </label>
          <input type="email" name="email" id="checkoutEmail" placeholder="Email" required/><br/>
          <label for="checkoutAddress">Address: </label>
          <input name="address" id="checkoutAddress" placeholder="Address" required/><br/>
          <label for="checkoutCity">City / Town: </label>
          <input name="city" id="checkoutCity" placeholder="City" required/><br/>
          <label for="checkoutZip">Zip Code: </label>
          <input type="number" name="zip" id="checkoutZip" placeholder="Zip Code" required/><br/>
          <label for="phoneNumber">Phone Number: </label>
          <input type="number" name="phone" id="phoneNumber" placeholder="Phone number" required/><br/>
          <label for="paymentMethod">Payment Method: </label>
          <select id="paymentMethod">
            <option> ---Choose one--- </option>  
            <option> Credit </option>  
            <option> Debit </option>  
            <option> Paypal </option>
          </select><br/>
          <input type="submit" value="Check Out" class="hidden" />
        </form>
      </div>
    </div>
    `);
    res.end();
    // );
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

router.post("/carts/find/:userId", async (req, res) => {
  await Cart.create({
    userId: req.params.userId,
    productId: req.session._id,
    title: req.session.title,
    quantity: 1,
    price: req.session.price,
  });
  res.redirect(`/carts/find/${req.params.userId}`);
});

router.post("/carts/find/:userId/checkout", async (req, res) => {
  const { firstname, lastname, email, address, city, zip, phone } = req.body;
  req.session.firstName = firstname;
  req.session.lastName = lastname;
  req.session.email = email;
  req.session.address = address;
  req.session.city = city;
  req.session.zip = zip;
  req.session.phone = phone;
  try {
    // const cart = await Cart.findOne({ userId: req.params.userId });
    const cart = await Cart.find();
    let priceSum = 0,
      quantitySum = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].userId === req.params.userId) {
        priceSum += cart[i].price;
        quantitySum += cart[i].quantity;
      }
    }
    req.session.priceSum = priceSum;
    req.session.quantitySum = quantitySum;
    console.log("---------req.session:", req.session);

    await Order.create({
      userId: req.params.userId,
      productId: req.session._id,
      title: req.session.title,
      quantity: req.session.quantitySum,
      amount: req.session.priceSum,
      address: req.session.address,
      status: "pending",
    });

    res.send(`
      <h2>Order has been submitted successfully.</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/orders/find/${req.params.userId}">My Orders</a></li>
      </ul>`);
    // res.redirect(`/carts/find/${req.params.userId}/checkout`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
