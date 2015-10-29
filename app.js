var express = require('express');

var app = express();

require('./config/express')(app);

module.exports = app;
