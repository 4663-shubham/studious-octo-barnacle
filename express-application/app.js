const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use('/createAFile',function (req, res, next) {
    console.log(req.url);
    next();
});

app.get('/createAFile', function (req, res) {
    res.send(
        fs.writeFile('xyz.txt'," ", function (err) {
            if (err) throw err;
            console.log("file is created")
        })
    );
});

app.use('/addContent',function (req, res, next) {
    console.log(req.url);
    next();
});

app.get('/addContent', function (req, res) {
    res.send(
        fs.appendFile('xyz.txt','{fileName:"xyz", Content: ""}', 'utf-8', function (err) {
            if (err) throw err;
            console.log("data appended in file! mission accomplished")
        })
    )
});

app.use('/resetFile',function (req, res, next) {
    console.log(req.url);
    next();
});

app.get('/resetFile', function (req, res) {
    res.send(
        fs.writeFile('xyz.txt',"", function (err) {
            if (err) throw err;
            console.log("Data  erased !")
        })
    );
});

app.use(express.static(path.join(__dirname, "public")));
app.get('/showImage', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });


app.listen(3000);