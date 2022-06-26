const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../guards/tokenAuth");
const db = require("../model/helper");
const bcrypt = require("bcrypt");
const saltRound = 10;
const secretKey = process.env.SECRET_KEY;
require("dotenv").config();

// register a new user account and verify
router.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) return res.status(400).send({ message: "Passwords do not match" });

  try {
    const hashPassword = await bcrypt.hash(email, saltRound);
    await db(
      `INSERT INTO users (email, password) VALUES ("${email}", "${hashPassword}")`
    );
    res.send({ message: "Registration was successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// verify login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const results = await db(
      `SELECT * FROM users WHERE email = "${email}"`
    );
    const user = results.data[0];
    if (user) {
      const userId = user.id;

      // console.log(results);

      const passwordIsCorrect = await bcrypt.compare(password, user.password);
      if (!passwordIsCorrect) throw new Error("Incorrect password");

      const token = jwt.sign({ userId }, secretKey);
      res.send({ message: "Login was successful", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// access protected route after a successful login
router.get("/account", auth, (req, res) => {
  res.send({
    message: "Success" + req.userId,
  });
});

module.exports = router;
