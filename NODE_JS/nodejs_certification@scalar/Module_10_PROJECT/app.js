
const express = require('express');//Importing express.

const categories = require("./Routes/categories")

const app = express();//calling express.

const mongoose = require('mongoose');//import mongoose
mongoose.connect('mongodb://127.0.0.1/learningPlatform') //To connect to DB.(The url with default localhost adrress :127.0.0.1 and dbname:testDatabase)
    .then(() => console.log('Connection is Successfull')) //If connection is successfull
    .catch(err => console.log('Coud not connect to mongodb', err))


app.use(express.json()); // Middleware to parse JSON bodies.
app.use(categories);


//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));