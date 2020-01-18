require("dotenv/config");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const movie = require("./routes/movies");

//routes
app.use('/movies',movie);


//database connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
console.log("connection successfull");
});



// listening the calls on 3000
app.listen(3000);


