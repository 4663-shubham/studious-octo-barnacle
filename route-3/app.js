const express = require('express') // applying express module 
const app = express(); // initalizong express in project or on local file
const fs = require('fs') // module for writing, creating , reading & deleting files 
port = 3001; // port no. for communication between local machine/local server and browser 

let counter = 0; // variable to capture the count of visit to browser 

// capture counter (visit count)
app.get('/', (req, res) => {
    counter++;
    res.json({'Times':counter});
    console.log(counter) // debugging 
});

//reset counter (visit count)
app.get('/reset', (req, res) => {
    counter = 0;
    res.json({'Times':counter});
    console.log(counter)
});

app.listen(port);

