const express = require("express");
const { createUser, authUserEmail } = require("../service/user.service");

const route = express.Router();

route.post("/reg", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

route.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUserEmail(email, pwd);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

module.exports = route;
