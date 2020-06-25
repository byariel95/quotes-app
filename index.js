const express = require('express');
const morgan = require('morgan');
const { indexRoutes, quotesRoutes } = require('./src/routes/allRoutes');
const { notFound } = require('./src/middlewares/not-found.middleware');
const app = express();

// middlewares --
app.use(express.static("./src/public"));
app.use(morgan('dev'));
app.use(express.json());

// routes --
app.use('/',indexRoutes); 
app.use('/',quotesRoutes); 
app.use(notFound);

module.exports = app;