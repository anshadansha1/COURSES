
const express = require('express');//Importing express.

const router = express.Router();//setting route

const mongoose = require('mongoose');//import mongoose


const Joi = require('joi');//import joi

//Create a schema:
const categorySchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30 }  
})
//Create a Model :
const Category = mongoose.model('Category' , categorySchema);//'Category' is model based on schema 'categorySchema' .



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
    await category.save();
    res.send(category);
});
// //PUT : Update
router.put('/api/categories/:id', async (req , res)=> {
    //validation part:
    const {error} = validateData(req.body)
    if(error) res.send(400).send(error.details[0].message)
    //Updating by id in DB:
    const category = await  Category.findByIdAndUpdate(req.params.id , {name : req.body.name} ,{new : true})
     if(!category) return res.status(404).send('The category with given ID was not found');
     res.send(category);
})

//DELETE : delete
router.delete('/api/categories/:id', async (req , res)=>{

    const category = await Category.findByIdAndDelete(req.params.id)//category with passed id will be deleted here
    if(!category) return res.status(404).send('The genre with the given ID was not found.');

    res.send(category);
})

router.get('/api/categories/:id', async (req , res)=> {
    const category = await  Category.findById(req.params.id)//Finds the particular course with id.
     if(!category) return res.status(404).send('The category with given ID was not found');
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