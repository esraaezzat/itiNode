// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/iti');

const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost:27017/iti';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://admin:admin@ds151809.mlab.com:51809/iti'
   
}
mongoose.connect(mongo_url,(err)=>{
    if(err){
        console.log('Mongo Connect Error',err.message)
    } else {
        console.log('connected successfully')
    }
});
