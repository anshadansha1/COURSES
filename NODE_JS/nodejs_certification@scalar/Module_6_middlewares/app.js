//Custom Middleware :

const express = require('express');//import express

const morgan = require('morgan');//Importing morgan

const myMiddlewareFunction = require('./middlwares/middle');//Importing custom middleware from folder
const myMiddlewareFunction2 = require('./middlwares/middle2');//Importing middle2


const app = express();//To get those methods from express.

app.use(express.json());



//Custom middleware :
app.use(myMiddlewareFunction);
app.use(myMiddlewareFunction2);

//user third partym middleware-morgan
app.use(morgan());

//Handling Multiple routes:
let courses = [ //change const to let for delete
    {id:1 , name : 'JavaScript'},
    {id:2 , name : 'Java'},
    {id:3 , name : 'Python'},
]

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

//2. app.post() : TO CREATE
//Before using post ,define a get route for getting all courses:
app.get('/courses',(req , res) =>{
    res.send(courses);
})
//post()
//Whenever we are  using post(whenever we need to create data),when we are using Express you have pass to JSON
//To pass you need to use a Middleware(Here we used JSON).
app.post('/courses' , (req , res) =>{
    const course = {
        id : courses.length +1,
        name : req.body.name
    }
    courses.push(course);//pushing courses collection
    res.send(course);
})

// 3. app.put() :TO UPDATE
//used to update already existing entries.
app.put('/courses/:coursename', (req , res)=> {
    let course = courses.find(course => course.name === req.params.coursename);
     if(!course) res.status(404).send('The course you are looking for does not exist');

     course.name = req.body.name;//whatever the name we give in body in postman will update above courses array object.
     res.send(course);
})

//Handling Multiple routes-continue:
app.get('/courses/:coursename',(req , res) =>{
    // console.log(req.params.coursename);
    let course = courses.find(course => course.name === req.params.coursename);//parseInt to convert string to int
   
    //To handle Error when specific course is not there.
    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course);
})

//4 .app.delete() : To Delete
// app.delete('/courses/:coursename',(req , res)=>{
//     let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename);
//     courses = UpdatedCourses;
//     res.send(courses);
// })
//DELETE using id :
app.delete('/courses/:id',(req , res)=>{
    let course = courses.find(course => course.id !== req.params.id); //Finds the particular course with id.
    if(!course) res.status(404).send('The course you are looking for does not exist');//if not found

    const index = courses.indexOf(course);//To find the index .
    courses.splice(index , 1);//To delete that index from array.
    res.send(course);
})

//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));

