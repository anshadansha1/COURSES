//Handling Multiple Routes .

//First import Express:
const express = require('express');

const app = express();

//Methods : get() , post() , put() ,delete().

//Handling Multiple routes:
const courses = [
    {id:1 , name : 'JavaScript'},
    {id:2 , name : 'Java'},
    {id:3 , name : 'Python'},
]
app.get('/courses/:coursename',(req , res) =>{
    console.log(req.params.coursename);
    let course = courses.find(course => course.name === req.params.coursename);//parseInt to convert string to int
   
    //To handle Error when specific course is not there.
    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course);
})

app.get('/',(req , res) =>{
    res.send('Hello from Scalar Topics');
})

app.get('/about',(req , res) =>{
    res.send('We create Impact');
})
app.get('/contact',(req , res) =>{
    res.send('Contact us on abcd@gmail.com ');
})

//Route Parameters :

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })


//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));

