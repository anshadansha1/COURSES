
const express = require('express');//Importing express.

const categories = require("./Routes/categories")

const app = express();//calling express.

app.use(express.json()); // Middleware to parse JSON bodies.
app.use(categories);


//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));