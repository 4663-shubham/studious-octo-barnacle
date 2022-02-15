const express = require("express");

const app = express();

const port = 3000;

var counter = 0;

app.get('/', function (req, res) {
    counter ++;
    res.json({"Times":counter});
});

app.get('/reset', function (req, res) {
    counter = 0;
    res.sendFile(__dirname + "/html/index.html")    
})

app.listen(port, function(){

})


// app.listen(3000, function(){
//     counter += 1 ;

//     console.log("You are conncected "+ counter + " times");
// });


