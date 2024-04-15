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
      "SELECT b.id_post, b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, pc.category_name, u.user FROM post as b INNER JOIN post_categories as pc ON pc.id_category = b.category_id INNER JOIN users as u ON u.id_user = b.user_id";
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

router.route("/readBlog").get(async (req, res) => {
  const id_post = req.query.id_post;
  console.log(id_post);
  try {
    const query =
      "SELECT b.id_post, b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, pc.category_name, u.user FROM post as b INNER JOIN post_categories as pc ON pc.id_category = b.category_id INNER JOIN users as u ON u.id_user = b.user_id WHERE b.id_post = $1";
    db.pool.query(query, [id_post], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error querying the database" });
      }
      if (result.rows.length === 1) {
      }
      res.status(200).json({ blog: result.rows });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/uploadImage", upload.single("file"), (req, res, next) => {
  const { originalname, size, path } = req.file;
  const { user_id, titleT, headlineT, body } = req.body;

  console.log(user_id);
  try {
    const queryImage =
      "INSERT INTO public.images(id_blog, filename, file_size, file_path) VALUES ($4, $1, $2, $3);";

    const queryBlog =
      "INSERT INTO post (user_id, title, headline, published_date, body, category_id) VALUES ($1, $2, $3,NOW(), $4, 1) RETURNING id_post";

    const valuesBlog = [user_id, titleT, headlineT, body];

    const valuesImage = [originalname, size, path];

    db.pool.query(queryBlog, valuesBlog, (error, results) => {
      if (error) {
        console.error("Error occurred Blog: ", error);
      } else {
        const postId = results.rows[0];
        valuesImage.push(postId.id_post);
        console.log("AQUI ", valuesImage);
        db.pool.query(queryImage, valuesImage, (error, results) => {
          if (error) {
            console.error("Error occurred Image: ", error);
          } else {
            console.log("Post and Image inserted succesfully");
          }
        });
      }
    });

    res.status(200).json({ message: "image data added", id: "id_post" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
