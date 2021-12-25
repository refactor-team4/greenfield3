/********************* Requires *********************/
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors({ credentials: true, sameSite: true }));
// eslint-disable-next-line no-unused-vars
const mysql = require('mysql2');


/***************** Including Routes *****************/
const comments=require("./routers/comments")
const posts=require("./routers/posts")
const users=require("./routers/users")
const products=require("./routers/products")
const editprofile=require("./routers/editprofile")
const editpassword=require("./routers/editpassword")
const blogs=require("./routers/blogs")

/******************** Middleware ********************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/********************** Routes **********************/

app.use("/users", users)
app.use("/comments", comments)
app.use("/posts", posts)
app.use("/products", products)
app.use("/editprofile", editprofile)
app.use("/editpassword", editpassword)
app.use("/blogs", blogs)
/**************** Listening Requests ****************/
var port=5000
app.listen(port, function () {
  console.log(`listening on port http://localhost:${port} !`);
});
