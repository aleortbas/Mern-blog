const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");
const multer = require("multer");
const fs = require("fs");

require("dotenv").config();
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/home/aleortbas/Documents/imagesBlog");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/blogsHome").get(async (req, res) => {
  try {
    const query =
      "SELECT  b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, pc.category_name, u.user FROM post as b INNER JOIN post_categories as pc ON pc.id_category = b.category_id INNER JOIN users as u ON u.id_user = b.user_id";
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
  const { user_id, titleT, headlineT, body } = req.body;
  try {
    const query =
      "INSERT INTO post (user_id, title, headline, published_date, body, category_id) VALUES ($1, $2, $3,NOW(), $4, 1)";
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
  const { originalname, size, path } = req.file;
  console.log(path);

  try {
    const query =
      "INSERT INTO public.images(id_image, id_blog, filename, file_size, file_path) VALUES (2, 20, $1, $2, $3);";
    const values = [originalname, size, path];
    db.pool.query(query, values, (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ message: "image data added" });
    });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
