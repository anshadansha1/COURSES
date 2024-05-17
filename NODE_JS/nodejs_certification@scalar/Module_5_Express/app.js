//First import Express:
const express = require('express');
//This function will return lot of methods.
//To get those methods define another variable:
const app = express();

//Methods : get() , post() , put() ,delete().

//1 app.get() :[To route HTTP GET requests to the specified path]
app.get('/',(req , res) =>{
    res.send('Hello from Scalar Topics');
})

app.get('/about',(req , res) =>{
    res.send('We create Impact');
})

//Now if you run the code you will not see anything in output .
//This is bcs you have to Specify the PORT :
app.listen(3000,()=> console.log('Port is Running on 3000'));

