const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const blogs = require("./routes/blog");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/", users);
app.use("/", blogs);

app.listen(5000, () => {
  console.log("Server started at 5000");
});
