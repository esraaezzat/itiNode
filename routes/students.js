var express = require('express');
var router = express.Router();
var Student = require('../Models/usermodel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Student.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    next(err)
  });

});


router.post('/',function(req,res,next){
  debugger;
 
   Student.create(req.body)
   res.send("Done!!");
});

router.get('/getByQuery',function(req,res,next){
  debugger;
  Student.findOne(req.query).then(data=>{
    res.json(data);
  })
  .catch(err=>{
    next(err)
  });

})

module.exports = router;


