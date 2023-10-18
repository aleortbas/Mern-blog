const db = require("../dbConnection");
const bcrypt = require("bcrypt");
const salRounds = 10;
const password = "hola";

const createUser = (req, res) => {
  bcrypt.hash(password, salRounds, async (err, hash) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Password hashing error" });
    }
    try {
      const query =
        "INSERT INTO users (first_name, last_name, email, password_hash, username) VALUES ($1, $2, $3, $4, $5);";
      const values = ["testId", "testId", "testId", hash, "testId"];
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
};

const getUser = (req, res) => {
  db.pool.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(300).json(result.rows);
  });
};

module.exports = {
  createUser,
  getUser,
};
