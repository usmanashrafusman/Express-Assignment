const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;
const path = require("path");
let ejs = require('ejs');




app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index' , {data : {appName: "Express Js"}})
});


app.get("/about", (req, res) => {
  res.render('about' , {data : {aboutText: "This is my about text", appName: "Express Js"}})
});


app.get("/:name", (req, res) => {
  res.render('params' , {data : {param: req.params.name,appName: "Express Js"},})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
