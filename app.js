const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const filmRouter = require('./routes/filmRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/movies', filmRouter);

module.exports = app;
