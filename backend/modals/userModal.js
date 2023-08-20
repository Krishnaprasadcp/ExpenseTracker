const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
  
});

const UserModal = mongoose.model("UserData",UserSchema);
module.exports = UserModal; 