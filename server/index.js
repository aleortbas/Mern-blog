const express = require("express");
const users = require("./routes/blogs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", users.getUser);
app.get("/addUsers", users.createUser);

app.listen(5000, () => {
  console.log("Server started at 5000");
});
