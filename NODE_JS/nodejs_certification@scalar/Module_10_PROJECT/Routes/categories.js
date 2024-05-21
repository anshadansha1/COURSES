
const express = require('express');//Importing express.

const {Category , validate} =require('../models/categoriesModel');//imporing the ones exported from 'categoriesModel' 

const router = express.Router();//setting route



//GET: 
router.get('/',async (req , res ) => {
    let categories = await Category.find();//finds data from database
    res.send(categories);
});

//POST :Create
router.post('/',async (req , res ) => {

    const {error} = validate(req.body)
    if(error) res.send(400).send(error.details[0].message)
    const category = new Category({
        name : req.body.name
})
    await category.save();
    res.send(category);
});
// //PUT : Update
router.put('/:id', async (req , res)=> {
    //validation part:
    const {error} = validate(req.body)
    if(error) res.send(400).send(error.details[0].message)
    //Updating by id in DB:
    const category = await  Category.findByIdAndUpdate(req.params.id , {name : req.body.name} ,{new : true})
     if(!category) return res.status(404).send('The category with given ID was not found');
     res.send(category);
})

//DELETE : delete
router.delete('/:id', async (req , res)=>{

    const category = await Category.findByIdAndDelete(req.params.id)//category with passed id will be deleted here
    if(!category) return res.status(404).send('The genre with the given ID was not found.');

    res.send(category);
})

router.get('/:id', async (req , res)=> {
    const category = await  Category.findById(req.params.id)//Finds the particular course with id.
     if(!category) return res.status(404).send('The category with given ID was not found');
     res.send(category);
})


module.exports = router ;//exporting router