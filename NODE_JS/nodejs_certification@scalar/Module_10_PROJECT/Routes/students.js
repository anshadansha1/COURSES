const express = require('express');//Importing express.
const {Student , validate} =require('../models/studentsModel');//imporing the ones exported from 'studentsModel' 

const router = express.Router();//setting route


//GET: 
router.get('/',async (req , res ) => {
    let students = await Student.find();//finds data from database
    res.send(students);
});

//POST :Create
router.post('/',async (req , res ) => {

    const {error} = validate(req.body)
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
    const {error} = validate(req.body)
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


module.exports = router ;//exporting router