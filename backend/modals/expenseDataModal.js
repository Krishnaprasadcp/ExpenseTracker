const { Decimal128 } = require('mongodb');
const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;
const expenseSchema =new Schema({
    expenseName:{
        type:String,
        required:true
    },
    price:{
        type:Decimal128,
        required:true
    }
    ,
    catagory:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const expenseModal = mongoose.model("Expense",expenseSchema);
module.exports = expenseModal;