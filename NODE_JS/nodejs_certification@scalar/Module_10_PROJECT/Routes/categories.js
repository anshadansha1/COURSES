
const express = require('express');//Importing express.

const router = express.Router();//setting route

const mongoose = require('mongoose');//import mongoose


const Joi = require('joi');//import joi

//Create a schema:
const categorySchema = new mongoose.schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30 }  
})
//Create a Model :
const Category = new  mongoose.model('Category' , categorySchema);//'Category' is model based on schema 'categorySchema' .



//GET: 
router.get('/api/categories',async (req , res ) => {
    let categories = await Category.find();//finds data from database
    res.send(categories);
});

//POST :Create
router.post('/api/categories',async (req , res ) => {

    const {error} = validateData(req.body)
    if(error) res.send(400).send(error.details[0].message)
    const category = new Category({
        name : req.body.name
})
    await Category.save();
    res.send(category);
});
//PUT : Update
router.put('/api/categories/:id', (req , res)=> {
    const category = categories.find(c => c.id === parseInt(req.params.id));//Finds the particular course with id.
     if(!category) return res.status(404).send('The category with given ID was not found');

    //  if(error) return res.status(400).send(error.details[0].message);

     category.name = req.body.name;//Updating name
     res.send(category);
})

//DELETE : delete
router.delete('/api/categories/:id',(req , res)=>{
    const  category = categories.find(c => c.id === parseInt(req.params.id)); //Finds the particular course with id.
    if(!category) return res.status(404).send('The genre with the given ID was not found.');

    const index = categories.indexOf(category);//To find the index .
    categories.splice(index , 1);//To delete that index from array.
    res.send(category);
})

router.get('/api/categories/:id', (req , res)=> {
    const category = categories.find(c => c.id === parseInt(req.params.id));//Finds the particular course with id.
     if(!category) return res.status(404).send('The genre with given ID was not found');
     res.send(category);
})

//VALIDATION PART
function validateData(category){
    const schema = {
        name : Joi.string().min(3).required() //name should be with min length 3
    }

    return Joi.validate(category , schema);
}

module.exports = router ;//exporting router