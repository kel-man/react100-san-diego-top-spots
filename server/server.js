const express = require('express');
const morgan = require('morgan');
// const axios = require('axios'); /*15.1K (gzipped: 5.1K)*/

const app = express();
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

module.exports = app;
