const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {getUserData,postRegisterUser,postLoginUser} = require('./controllers/userController');
const {getExpense,postExpense} = require('./controllers/expenseDataController');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>(console.log('Connected to DB')))
    .catch(console.error);
   
    //get a user data
    app.get('/user/:name',getUserData);
    //register a new user
    app.post('/user/register',postRegisterUser);
    //login a user
    app.post('/user/login',postLoginUser)
    //get the user expense
    app.post('/user/Expense/',getExpense);
    //add the user Expense
    app.post('/user/addExpense/',postExpense);

    
app.listen(3000,()=>(console.log("Connected to port 3000")));