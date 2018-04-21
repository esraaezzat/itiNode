//import { Error } from 'mongoose';


const setting = require('./../config/default');
const jwt = require('jsonwebtoken');
const student = require('./../Models/usermodel')
module.exports = (req,res,next)=>{
    let token = req.headers['authorization'];
    debugger;
    jwt.verify(token,setting.jwt.secret,function(err,decoded){
debugger;
        if(err) return next(new Error('please login '));
         debugger;
        student.findOne({name:decoded.name})
        //req.student = decoded;

        next();
    })
}