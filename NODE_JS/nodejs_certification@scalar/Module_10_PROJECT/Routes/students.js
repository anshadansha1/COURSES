const express = require('express');//Importing express.
const router = express.Router();//setting route
const mongoose = require('mongoose');//import mongoose
const Joi = require('joi');//import joi

//Create a schema:
const studentSchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30 } ,
    isEnrolled : {
        type : Boolean,
        default : false
    },
    
    Phone :{
        type : String,
        required : true,
        minlength : 10 ,
        maxlength : 25
    }
})
//Create a Model :
const Student = mongoose.model('Student' , studentSchema);//'Student' is model based on schema 'studentSchema' .



//GET: 
router.get('/',async (req , res ) => {
    let students = await Student.find();//finds data from database
    res.send(students);
});

//POST :Create
router.post('/',async (req , res ) => {

    const {error} = validateData(req.body)
    if(error) res.send(400).send(error.details[0].message)
    const student = new Student({
        name : req.body.name,
        isEnrolled : req.body.isEnrolled,
        Phone : req.body.Phone
})
    await student.save();
    res.send(student);
});
// //PUT : Update
router.put('/:id', async (req , res)=> {
    //validation part:
    const {error} = validateData(req.body)
    if(error) res.send(400).send(error.details[0].message)
    //Updating by id in DB:
    const student = await  Student.findByIdAndUpdate(req.params.id , {name : req.body.name , Phone : req.body.Phone , isEnrolled : req.body.isEnrolled} ,{new : true})
     if(!student) return res.status(404).send('The student with given ID was not found');
     res.send(student);
})

//DELETE : delete
router.delete('/:id', async (req , res)=>{

    const student = await Student.findByIdAndDelete(req.params.id)//student with passed id will be deleted here
    if(!student) return res.status(404).send('The student with the given ID was not found.');

    res.send(student);
})

router.get('/:id', async (req , res)=> {
    const student = await  Student.findById(req.params.id)//Finds the particular student with id.
     if(!student) return res.status(404).send('The student with given ID was not found');
     res.send(student);
})

//VALIDATION PART
function validateData(student){
    const schema = {
        name : Joi.string().min(3).max(50).required(), //name should be with min length 3 and max 50
        Phone : Joi.string().min(10).max(50).required(),
        isEnrolled : Joi.boolean()
    }

    return Joi.validate(student , schema);
}

module.exports = router ;//exporting router