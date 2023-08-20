// importing required packages
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const PORT = process.env.PORT || 3000;

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(PORT, function(){
    console.log('API is live on http://localhost:3000/products');
});