// Import Express JS for app
var express = require("express");
var app = express();
var router = express.Router();

// Specify directory for html file views
var path = __dirname + '/views/';

// Function template for loggings
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

// File 404
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
