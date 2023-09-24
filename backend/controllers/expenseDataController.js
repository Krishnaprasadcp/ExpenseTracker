require('dotenv').config();
const expenseModal = require('../modals/expenseDataModal');
const userModal = require('../modals/userModal');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const getExpense =async (req,res)=>{
    jwt.verify(req.token,process.env.SECRET_KEY,async(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            const expenseData =await expenseModal.find({user:req.body.userId.userId});
            console.log(req.body.userId);
            res.json({
                authData,
                expenseData
            });
        }
    })
    
    // console.log(expenseData);
}
//add expense
const postExpense=async(req,res)=>{
    const {expenseName,catogory1,price,date,userId} = req.body;
    const expenseData = expenseModal({
        expenseName:expenseName,
        items:catogory1,
        price:price,
        date:date,
        user:userId
    });
    

    await expenseData.save();
    res.status(201).json({message:'created expense'})
}

//delete expense
const deleteExpense =async (req,res)=>{
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
          }
        const deletedItem = await expenseModal.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedItem);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    
}

module.exports={
    getExpense,
    postExpense,
    deleteExpense,
}




