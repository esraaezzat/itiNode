//import { use } from 'bcrypt/promises';

/**back */
var express = require('express');
var router = express.Router();
var Student = require('../Models/usermodel');
var bcrypt = require('bcrypt');
const isAuthenticated = require('./../middlewares/authenicated')

/* GET users listing. */


router.route('/login')
.post(async function(req,res,next){
  debugger;
  let {password,name} = req.body;
  let student = await Student.findOne({name});

  if(!student){
    return res.status(404).json({success:false,message:'user not found'});
  }

  let isMatched = await bcrypt.compare(password,student.password);
  if(isMatched)
  {debugger;
    let token = await student.generateToken();
    return res.status(202).json({success:true,message:'Authenticated',token});    
  }
  else{
    return res.status(400).json({success:false,message:'wrong Password'});        
  }

})


router.post('/',function(req,res,next){
  debugger;
 
   Student.create(req.body,function(err,student){
    res.json(student);
   })
   
});



router.get('/getAllStudents', function(req, res, next) {
  debugger;
  Student.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    next(err)
  });

});



router.delete('/delete/:_id',function(req,res,next){
  debugger;
  Student.remove({_id: req.params._id},function(err){
    if(err) return next(err);
    res.json({});
    
  })
    
  
})
router.use(isAuthenticated);

router.get('/getByQuery',function(req,res,next){
  debugger;
  Student.findOne(req.query).then(data=>{
    res.json(data);
  })
  .catch(err=>{
    next(err)
  });

})

/*login*/





module.exports = router;


