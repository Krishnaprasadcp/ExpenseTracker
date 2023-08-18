const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {getUserData} = require('./controllers/userController');
const {getExpense} = require('./controllers/expenseDataController');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>(console.log('Connected to DB')))
    .catch(console.error);
   

    app.get('/user',getUserData);
    app.get('/userExpense',getExpense);
    // app.post('/items',async (req,res)=>{
    //     try{
    //         const newItem = new Item({
    //             name:'hp',
    //             description:'asdfghj'
    //         });
    //         await newItem.save();
    //         res.json(newItem);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // });
    
app.listen(3000,()=>(console.log("Connected to port 3000")));