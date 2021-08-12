require("dotenv/config");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var cors = require('cors')
var corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST','DELETE'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(bodyParser.json());

const movie = require("./routes/movies");

//routes
app.use('/movies', cors(corsOptions), movie);


//database connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
console.log("connection successful");
});



// listening the calls on 3000
app.listen(3000);


