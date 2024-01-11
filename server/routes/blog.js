const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");

require("dotenv").config();
const router = express.Router();

router.route("/blogsHome").get(async (req, res) => {
  try {
    const query = "SELECT * FROM post";
    db.pool.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error querying the database" });
      }
      if (result.rows.length === 1) {
        const title = result.rows[2];
        console.log("title: ", title);
      }
      console.log(result.rows[0]);
      res.status(200).json({ user: result.rows[0] });
    });
  } catch (error) {}
});

module.exports = router;
