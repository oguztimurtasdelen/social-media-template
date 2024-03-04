// Imports
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// Variables
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '10440kb'}));

// Route Definitions
const postRoute = require('./routes/postRoute');

// Routing
app.get('/', (req, res, next) => {
    res.send('Merhaba Dünya!');
});


app.use('/post', postRoute);

app.use('*', (req, res, next) => {
    res.send('404 Not Found!')
});

module.exports = app;