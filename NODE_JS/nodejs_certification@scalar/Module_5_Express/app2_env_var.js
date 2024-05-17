//First import Express:
const express = require('express');
//This function will return lot of methods.
//To get those methods define another variable:
const app = express();

//Methods : get() , post() , put() ,delete().

//1 app.get() :To READ[To route HTTP GET requests to the specified path]
app.get('/',(req , res) =>{
    res.send('Hello from Scalar Topics');
})

app.get('/about',(req , res) =>{
    res.send('We create Impact');
})
app.get('/contact',(req , res) =>{
    res.send('Contact us on abcd@gmail.com ');
})

//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));

