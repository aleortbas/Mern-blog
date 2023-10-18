const db = require("../dbConnection");

const createUser = (req, res) => {
  db.pool.query(
    "INSERT INTO users (id_user, first_name, last_name, email, password_hash, username) VALUES (3, '3test', '3test', '3test', '3test', '3test');",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(301).send(`User added with ID ${result.rows[0]}`);
    }
  );
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
