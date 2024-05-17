//Http post() : .

//First import Express:
const express = require('express');

const app = express();

//Methods : get() , post() , put() ,delete().
//1 app.get() :To READ[To route HTTP GET requests to the specified path]:

//To use middleware:
app.use(express.json());

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

//2. app.post() :
//Before using post ,define a get route for getting all courses:
app.get('/courses',(req , res) =>{
    res.send(courses);
})
//post()
//Whenever we are  using post(whenever we need to create data),when we are using Express you have pass to JSON
//To pass you need to use a Middleware.
app.post('/courses' , (req , res) =>{
    const course = {
        id : courses.length +1,
        name : req.body.name
    }
    courses.push(course);//pushing courses collection
    res.send(course);
})


//ENVIRONMENT VARIABLE - for PORTs 
const port = process.env.PORT || 3000//for static 

app.listen(port,()=> console.log(`Port is Running on ${port}`));

