const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("node:path")

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

const upload = multer({ 
  storage: storage,
  limits: {fileSize:1000000}
 });

router.use('/uploads', express.static("/home/aleortbas/Documents/imagesBlog"));

router.route("/blogsHome").get(async (req, res) => {
  try {
    const query =
      "SELECT p.post_id,p.title,p.headline,p.body, u.user, u.file_path_user, i.file_path FROM post as p INNER JOIN users as u ON u.user_id = p.user_id INNER JOIN images as i ON i.id_blog = p.post_id";
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

router.get("/images/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../home/aleortbas/Documents/imagesBlog", filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    } else {
      res.sendFile(filePath);
    }
  });
});

router.route("/blogsHomeDate").get(async (req, res) => {
  try {
    const query =
      "SELECT p.post_id,p.title,p.headline,p.body, u.user, u.file_path_user FROM post as p INNER JOIN users as u ON u.user_id = p.user_id";
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
      "SELECT b.id_post, b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, pc.category_name, u.user FROM post as b  INNER JOIN users as u ON u.id_user = b.user_id WHERE b.id_post = $1";
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

router.route("/profileData").get(async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  try {
    const query =
      "SELECT p.title, p.headline, u.first_name || ' ' || u.last_name as username FROM post p INNER JOIN users u ON (u.user_id = p.user_id) WHERE u.user_id = '1'";
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
    res.status(500).json({ message: "Internal server error" });
  }
});

router.route("/categories").get(async (req,res) => {
  try {
    const query = 
    "SELECT * FROM categories";
    db.pool.query(query, (err,result) => {
      if(err){
        return res.status(500).json({ message: "Error querying the database" });
      }
      if(result.rows.length === 1){
      }
      res.status(200).json({ categories: result.rows })
    })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
})

router.post("/uploadImage", upload.single("file"), (req, res, next) => {
  const { originalname, size, path } = req.file;
  const { user_id, titleT, headlineT, body, category_id} = req.body;

  console.log("sdfsd",category_id);
  try {
    const queryImage =
      "INSERT INTO public.images(id_blog, filename, file_size, file_path) VALUES ($4, $1, $2, $3);";

    const queryBlog =
      "INSERT INTO post (user_id, title, headline, published_date, body, category_id) VALUES ($1, $2, $3,NOW(), $4, $5) RETURNING post_id";

    const valuesBlog = [user_id, titleT, headlineT, body, category_id];

    const valuesImage = [originalname, size, path];

    db.pool.query(queryBlog, valuesBlog, (error, results) => {
      if (error) {
        console.error("Error occurred Blog: ", error);
      } else {
        const postId = results.rows[0];
        valuesImage.push(postId.post_id);
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
