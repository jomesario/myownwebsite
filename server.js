var express=require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public/')));

app.get("/",function(req,res){
res.render("index");
});

app.post("/",function(req,res){
  res.render("form");
});
app.listen(8080);
