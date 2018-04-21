const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const setting = require('./../config/default.json');
const util  = require('util');
const promisifiedJwt = util.promisify(jwt.sign)   // take callbake fun and return promise
const StudentSchema = new Schema({
    name:{
        type:String,
        lowercase:true
    },
    age:Number,
    password:{
        type:String,
        require:true
    }
    
});

/**before saving student*/
StudentSchema.pre('save', async function(){
    
  let password = this.password;
  this.password =  await  bcrypt.hash(password,7); //hash password
  
    
});

/**after saving student */
StudentSchema.post('save', function(student,next){
   // debugger;
    next();
})

/***token */

StudentSchema.methods.generateToken = function(){ 
    //return promise
    let student = this;
    return promisifiedJwt({name:student.name},setting.jwt.secret,{
        expiresIn:setting.jwt.ttl
    });
}


const Student = mongoose.model('Student',StudentSchema,'students');
module.exports = Student;