const db = require("../dbConnection");
const bodyParser = require("body-parser");
const authMiddleware = require("../middleware");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("node:path");
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

router.use(bodyParser.json())

const upload = multer({ 
  storage: storage,
  limits: {fileSize:1000000}
 });

router.use('/uploads', express.static("/"));


router.route("/imageJson").post(async (req,res) => {
  const filePathPost = req.body;
  console.log("filePathPost", filePathPost);

  try {
    const [response1, response2] = await Promise.all([
      fetch(`http://localhost:5000/uploads/${filePathPost.filePathPost}`),
      fetch(`http://localhost:5000/uploads/${filePathPost.filePathUser}`)
    ])
    if (!response1.ok) {
      throw new Error('Network response was not ok')
    } else {
      const imageBlogUrl = await response1.url

      res.status(200).json({
        image_Blog: imageBlogUrl
      })

    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });  
  }
})

router.route("/blogsHomeDate").get(async (req, res) => {
  try {
    const query =
      "SELECT p.post_id,p.title,p.headline,p.body, u.user, u.file_path_user, i.file_path FROM post as p INNER JOIN users as u ON u.user_id = p.user_id INNER JOIN images as i ON i.id_blog = p.post_id";
    db.pool.query(query, async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error querying the database" });
      }
      if (result.rows.length === 1) {
        const title = result.rows[2];
      }

      var blogs = result.rows;
      const fetchedImageBlogs = []

      for (let i = 0; i < blogs.length; i++) {
        const elementBlogs = blogs[i];
        const splitIdPost = elementBlogs.post_id
        const splitPathPost = elementBlogs.file_path
        const splitPathUser = elementBlogs.file_path_user.split("/")
        filePathPost = splitPathPost
        filePathUser = splitPathUser.pop()
  
        
        const requestData = {
          splitIdPost,
          filePathPost,
          filePathUser
        };

        console.log("requestData", requestData);

        try {
          const response1 = await fetch(`http://localhost:5000/imageJson`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          })
        console.log("hasta aqui", response1);
          if (response1.ok) {
            const data = await response1.json();
            const image_blog = data.image_Blog
            console.log("QUE ES ESTO : ", image_blog);
  
            fetchedImageBlogs.push(image_blog)
          }
          console.log(fetchedImageBlogs);
        } catch (error) {
          console.error("SU PUTA MADRE: ", error);
        }
      }
      
      res.status(200).json({ blog: result.rows, images: fetchedImageBlogs });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

router.route("/blogsHome").get(async (req, res) => {
  try {
    const query =
      "SELECT p.post_id,p.title,p.headline,p.body, u.user, u.file_path_user, STRING_AGG(i.file_path, ' ') AS file_path FROM post as p INNER JOIN users as u ON u.user_id = p.user_id INNER JOIN images as i ON i.id_blog = p.post_id GROUP BY p.post_id, p.title, p.headline, p.body, u.user, u.file_path_user";
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

router.route("/readBlog").get(async (req, res) => {
  const id_post = req.query.id_post;
  try {
    const query =
      "SELECT b.post_id, b.title, b.headline, TO_CHAR(b.published_date, 'DD-MM-YYYY') as published_date, b.body, u.user, u.file_path_user, i.file_path FROM post as b INNER JOIN images as i ON i.id_blog = b.post_id INNER JOIN users as u ON u.user_id = b.user_id WHERE b.post_id = $1";
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


router.post("/uploadImage", upload.array("file"), async (req, res, next) => {
  const prueba = req.files
  var originalname, size, path
  const { user_id, titleT, headlineT, body, category_id} = req.body;

  try {
    const queryBlog =
    "INSERT INTO post (user_id, title, headline, published_date, body, category_id) VALUES ($1, $2, $3,NOW(), $4, $5) RETURNING post_id";
    const valuesBlog = [user_id, titleT, headlineT, body, category_id];
    const resultBlog = await db.pool.query(queryBlog, valuesBlog);
    const postId = resultBlog.rows[0].post_id;

    const queryImage =
    "INSERT INTO public.images(id_blog, filename, file_size, file_path) VALUES ($1, $2, $3, $4);";

    for (let i = 0; i < prueba.length; i++) {
      postId
      originalname = prueba[i].originalname;
      size = prueba[i].size;
      path = prueba[i].path;

      const valuesImage = [originalname, size, path];
          valuesImage.unshift(postId);
          db.pool.query(queryImage, valuesImage, (error, results) => {
            if (error) {
              console.error("Error occurred Image: ", error);
            } else {
              console.log("Post and Image inserted succesfully");
            }
          });

    }
    res.status(200).json({ message: "image data added", id: "id_post" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
module.exports = router;
