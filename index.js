var express = require("express");
var path = require("path");
var config = require("config-lite")(__dirname);
var route = require("./routes");
var ejs = require('ejs');
var app = express();


//设置模板引擎

app.engine('html',ejs.__express);
app.set("view engine","html");
app.set("views",path.join(__dirname,"views"));

//设置静态目录
app.use(express.static(path.join(__dirname,"public")));

route(app);

app.listen(8089,function(){
    console.log("server listen on port 8089!");
});