const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

const TWO_HOURS = 1000 * 60 * 60 * 2;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      maxAge: TWO_HOURS,
      sameSite: true,
    },
  })
);

app.use(authRoute);
app.use(userRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);

app.use(express.static(path.join(__dirname, "/public")));

module.exports = app;
