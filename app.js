const https = require('https');
const express = require('express');
var forceSsl = require('express-force-ssl');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const multer = require('multer');
var fs = require('fs');
var http = require('http');
const request = require('request');

const app = express();

const port = process.env.PORT || 3000;

// COES middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));


// Index router
app.get('/', (req, res) => {
    res.send('Invalied Endpoing');
});

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
app.get('*', function(req, res) {
  res.sendfile('/public/index.html');
});

http.createServer(function(req, res) {
    
}).listen(8080);

