const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{
        type:String
    },
    age:Number
    
});


const Student = mongoose.model('Student',StudentSchema,'students');
module.exports = Student;