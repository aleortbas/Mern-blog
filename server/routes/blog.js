const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

require("dotenv").config();
const router = express.Router();

router.route("/blogsHome").get(async (req, res) => {
  try {
    const query =
      "SELECT  b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, pc.category_name, b.images, u.user FROM post as b INNER JOIN post_categories as pc ON pc.id_category = b.category_id INNER JOIN users as u ON u.id_user = b.user_id";
    db.pool.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error querying the database" });
      }
      if (result.rows.length === 1) {
        const title = result.rows[2];
      }
      res.status(200).json({ blog: result.rows });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

router.route("/postBlog").post((req, res) => {
  const { user_id, titleT, headlineT, body, imageBlob } = req.body;
  console.log("USER", user_id);
  console.log("images", imageBlob);
  try {
    const query =
      "INSERT INTO post (user_id, title, headline, published_date, body, category_id, images) VALUES ($1, $2, $3,NOW(), $4, 1, $5)";
    const values = [user_id, titleT, headlineT, body];
    db.pool.query(query, values, (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ message: "Blog added" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/uploadImage", upload.single("file"), (req, res, next) => {
  //res.json(req.file);
  const file = req.file;
  const query =
    "INSERT INTO post (user_id, title, headline, published_date, body, category_id, images) VALUES (124, $1, '$3',NOW(), '$4', 1, $2)";
  const image = file.buffer.toString("base64");
  const values = [file.originalname, image];
  db.pool.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error" });
    } else {
      res.status(200).json({ message: "Upload" });
    }
  });
});

module.exports = router;
