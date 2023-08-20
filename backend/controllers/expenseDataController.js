const expenseModal = require('../modals/expenseDataModal');
const userModal = require('../modals/userModal');
const getExpense =async (req,res)=>{
    const expenseData =await expenseModal.find({user:req.body.userId});
    res.json(expenseData);
    // console.log(expenseData);
}
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
module.exports={
    getExpense,
    postExpense
}




