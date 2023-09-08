const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {verifyToken}= require('./middleware/authMiddleware');
const {getUserData,postRegisterUser,postLoginUser} = require('./controllers/userController');
const {getExpense,postExpense,deleteExpense} = require('./controllers/expenseDataController');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3001',
    credentials:true
}));
app.use(cookieParser());
mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>(console.log('Connected to DB')))
    .catch(console.error);
   

    //get a user data
    app.get('/user/:name',getUserData);
    //register a new user
    app.post('/user/signup',postRegisterUser);
    //login a user
    app.post('/user/login',postLoginUser)
    //get the user expense
    app.post('/user/Expense/',verifyToken,getExpense);
    //add the user Expense
    app.post('/user/addExpense/',postExpense);
    //delete an expense
    app.delete('/user/expense/delete/:id',deleteExpense);
    
app.listen(3000,()=>(console.log("Connected to port 3000")));