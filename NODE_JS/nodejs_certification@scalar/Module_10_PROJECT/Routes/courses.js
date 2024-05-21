const express = require('express');//Importing express.
const {Course , validate} = require('../models/coursesModel');//imporing the ones exported from 'coursesModel' 
//import category to get category while entering student details:
const {Category , validate} = require('../models/categoriesModel'); 

const router = express.Router();//setting route


//GET: 
router.get('/',async (req , res ) => {
    let courses = await Course.find();//finds data from database
    res.send(courses);
});

//POST :Create
router.post('/',async (req , res ) => {

    const {error} = validate(req.body)
    if(error) res.send(400).send(error.details[0].message)

    //First find category by id from Category
    const category = await Category.findById(request.body.categoryId)
    if(!category) return res.status(400).send('Invalid ID ');

    let course = new Course({
        title : req.body.title,
        category: {
            _id : category._id,
            name : category.name 
        },
        creator : req.body.creator,
        rating : req.body.rating
})
    await course.save();
    res.send(course);
});
// //PUT : Update
router.put('/:id', async (req , res)=> {
    //validation part:
    const {error} = validate(req.body)
    if(error) res.send(400).send(error.details[0].message)

    //First find category by id from Category
    const category = await Category.findById(request.body.categoryId)
    if(!category) return res.status(400).send('Invalid ID ');

    //Updating by id in DB:
    const course = await  Course.findByIdAndUpdate(req.params.id , 
        {
            title : req.body.title,
            category: {
            _id : category._id,
            name : category.name 
            },
            creator : req.body.creator,
            rating : req.body.rating
        } ,{new : true})
     if(!course) return res.status(404).send('The course with given ID was not found');
     res.send(course);
})

//DELETE : delete
router.delete('/:id', async (req , res)=>{

    const course = await Course.findByIdAndDelete(req.params.id)//course with passed id will be deleted here
    if(!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
})

router.get('/:id', async (req , res)=> {
    const course = await  Course.findById(req.params.id)//Finds the particular course with id.
     if(!course) return res.status(404).send('The course with given ID was not found');
     res.send(course);
})


module.exports = router ;//exporting router