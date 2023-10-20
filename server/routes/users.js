const db = require("../dbConnection");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const router = express.Router();

router.use(bodyParser.json());

const salRounds = 10;

router.route("/signUp").post(async (req, res) => {
  console.log("Request received for /signUp");
  const { email, password, firstName, lastName, user } = req.body;

  bcrypt.hash(password, salRounds, async (err, hash) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Password hashing error" });
    }
    try {
      const query =
        'INSERT INTO users (first_name, last_name, email, password_hash, "user") VALUES ($1, $2, $3, $4, $5);';
      const values = [email, firstName, lastName, hash, user];
      db.pool.query(query, values, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(201).send(`User added with ID ${result.rows[0]}`);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });
});

router.route("/login").post(async (req, res) => {
  const { user, password } = req.body;
  try {
    const query = 'SELECT * FROM users WHERE "user" = $1;';
    const values = [user];
    db.pool.query(query, values, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error querying the database" });
      }
      if (result.rows.length === 1) {
        const userData = result.rows[0];
        const passwordHash = userData.password_hash;
        bcrypt.compare(password, passwordHash, (err, result) => {
          if (result) {
            const token = jwt.sign({ user }, process.env.SECRET, {
              expiresIn: "1h",
            });
            res.status(200).json({ user: userData });
          } else {
            console.log("password incorrect");
          }
        });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

function generateAccesToken(user) {
  return jwt.sign({ user }, "process.env.SECRET", { expiresIn: "5m" });
}

module.exports = router;
