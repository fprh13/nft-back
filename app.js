const express = require("express");
const app = express();
const router = require("./router.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());

// 4 Routing code
app.use("/", router);

module.exports = app;
