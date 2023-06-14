const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("../src/controller/user.controller");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoute);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
