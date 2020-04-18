var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Olá mundo!");
});

app.listen(8080, function(){
    console.log("Executando.");
});