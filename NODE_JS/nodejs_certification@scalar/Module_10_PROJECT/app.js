
const express = require('express');//Importing express.

const app = express();//calling express.

const categories = [
    {id:1 , name : 'Web'},
    {id:2 , name : 'Mobile'},
    {id:3 , name : 'Photography'},
]
//GET: 
app.get('/api/categories',(req , res ) => {
    res.send(categories);
});
//POST :Create
app.post('/api/categories',(req , res ) => {
    const category = {
        id : categories.length+1, //new id (3+1=4)
        name : req.body.name //Whatever the name we pass as req in postman body>raw it will be set as the name field of categories array
    };
    categories.push(category);
    res.send(category);
});
//PUT : Update
app.put('/api/categories/:id', (req , res)=> {
    const category = categories.find(c => c.id === parseInt(req.params.id));//Finds the particular course with id.
     if(!category) return res.status(404).send('The category with given ID was not found');

    //  if(error) return res.status(400).send(error.details[0].message);

     category.name = req.body.name;//Updating name
     res.send(category);
})

//DELETE : delete
app.delete('/api/categories/:id',(req , res)=>{
    const  category = categories.find(c => c.id === parseInt(req.params.id)); //Finds the particular course with id.
    if(!category) return res.status(404).send('The genre with the given ID was not found.');

    const index = courses.indexOf(category);//To find the index .
    category.splice(index , 1);//To delete that index from array.
    res.send(category);
})

app.get('/api/categories/:id', (req , res)=> {
    const category = categories.find(c => c.id === parseInt(req.params.id));//Finds the particular course with id.
     if(!category) return res.status(404).send('The genre with given ID was not found');
     res.send(category);
})