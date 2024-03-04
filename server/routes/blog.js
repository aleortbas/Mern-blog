const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { log } = require("console");

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

router.post("/uploadImage", upload.single("file"), (req, res, next) => {
  const { originalname, size, path } = req.file;
  const { user_id, titleT, headlineT, body } = req.body;

  console.log(user_id);
  try {
    const queryImage =
      "INSERT INTO public.images(id_image, id_blog, filename, file_size, file_path) VALUES (2, 20, $1, $2, $3);";
    const valuesImage = [originalname, size, path];
    db.pool.query(queryImage, valuesImage);

    const queryBlog =
      "INSERT INTO post (user_id, title, headline, published_date, body, category_id) VALUES ($1, $2, $3,NOW(), $4, 1)";
    const values = [user_id, titleT, headlineT, body];
    db.pool.query(queryBlog, values);

    res.status(200).json({ message: "image data added" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
