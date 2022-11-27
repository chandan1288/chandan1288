var express = require('express')


var app = express()


app.get("/", function(req, res){

    res.send("hello this is my site")
})

app.get("/chandan", function(req, res){
    res.sendFile(__dirname + "/lic.pdf")
})




app.listen(3000, function(){

console.log("This is application")

})