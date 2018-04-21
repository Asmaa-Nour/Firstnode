const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userScheme=new Schema({
username:{
    type:String,
    lowercase:true
    },
    age: Number
});
const User= mongoose.model('User',userScheme);
module.exports = User;


