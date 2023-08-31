require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModal = require("../modals/userModal");
const expenseModal = require('../modals/expenseDataModal');

//get a user data
const getUserData = async(req, res) => {
    const itemId = req.params.name;
    const foundItem = await userModal.findOne({_id:itemId});
    if(foundItem){
        res.json(foundItem);
    }else{
        res.status(404).json({message:'cant find the item'})
    }
};
//create a new user
const postRegisterUser =async (req, res) => {
  const {firstName,lastName,age, email, password, phoneNumber,date } = req.body;

  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(password,salt);
  const userInformation = userModal({
    firstName:firstName,
    lastName:lastName,
    age:age,
    email:email,
    password:hashedPassword,
    phoneNumber:phoneNumber,
    date:date,
  });
  await userInformation.save();
  
  res.status(201).json({message:'Created successfully'})

};

//login a user
const postLoginUser = async(req,res)=>{
  const {email,password} = req.body;
  const user = await userModal.findOne({email});
  if(user &&(await bcrypt.compare(password,user.password))){
    const token = generateToken(user._id);
    res.cookie('jwt',token,{maxAge:maxAge*1000});
    const userData={
      firstName:user.firstName,
      lastName:user.lastName,

    }
    res.status(200).json({
      user:userData,
      token:token    
    });
  }
  else{
    res.status(401).json({message:'Not found'})
  }

}
const maxAge = 3*60*60*24;

const generateToken=(id)=>{
  return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:maxAge});
}


module.exports = {
  getUserData,
  postRegisterUser,
  postLoginUser,
  
};
