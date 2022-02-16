const express = require("express");

const app = express();

const port = 3000;

const fs = require("fs");

const content = "This is a testing phase 1. ";

const content1 = "Now we are in phase 2. ";

app.get("/addNewData", function (req, res) {
  res.send(
    fs.writeFile("./txt/newData.txt", content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    })
  );
});

app.get("/updateNewData", function (req, res) {
  res.send(
    fs.appendFile("./txt/newData.txt", content1, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    })
  );
});

app.get("/displayData", function (req, res) {
  res.send(
    fs.readFile("./txt/newData.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    })
  );
});

app.listen(port, function name(params) {
  // Initialize server
});
