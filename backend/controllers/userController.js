require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModal = require("../modals/userModal");
const expenseModal = require("../modals/expenseDataModal");

//get a user data
const getUserData = async (req, res) => {
  const itemId = req.params.name;
  const foundItem = await userModal.findOne({ _id: itemId });
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: "cant find the item" });
  }
};
//create a new user
const postRegisterUser = async (req, res) => {
  const { userData, monthlyExpenseData } = req.body;

  if (userData && monthlyExpenseData.length <=0) {
    const ageParts = userData.age.split("-");
    const birthYear = parseInt(ageParts[0]);
    const curYear = new Date();
    const dob = curYear.getFullYear() - birthYear;
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userInformation = userModal({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
      address: userData.address,
      phoneNumber: userData.phoneNumber,
      sex: userData.sex,
      ageUser: dob,
    });
    const maxAge = 3 * 60 * 60 * 24;

    const savedUser = await userInformation.save();
    const userInfo={
      firstName:userData.firstName,
      lastName:userData.lastName
    };
    const token = generateToken(savedUser._id);
    try {
      res.cookie("jwt", token, {
        maxAge: maxAge * 1000
      });
      console.log("Cookie set successfully");
      res.status(201).json({ message: "Created successfully", token: token, userInfo: userInfo });
    } catch (error) {
      console.error("Error setting cookie:", error);
      // Handle the error appropriately
      res.status(500).json({ error: "Internal server error" });
    }

    // res.cookie("jwt",token,{maxAge:maxAge*1000});
    // console.log("created cookie");
    // res.status(201).json({ message: "Created successfully" ,token:token,userInfo:userInfo});

  }
  if (userData && monthlyExpenseData.length > 0) {
    const ageParts = userData.age.split("-");
    const birthYear = parseInt(ageParts[0]);
    const curYear = new Date();
    const dob = curYear.getFullYear() - birthYear;
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userInformation = userModal({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
      address: userData.address,
      phoneNumber: userData.phoneNumber,
      sex: userData.sex,
      ageUser: dob,
    });
    const savedUser = await userInformation.save();
    const userId = savedUser._id;
    const monthlyExpenses = monthlyExpenseData.map((expense) => ({
      category: expense.category,
      amount: parseFloat(expense.amount), // Use parseFloat for numbers
      date: new Date(expense.date),
    }));
    const expenseMonthlyData = await expenseModal({
      user: userId,
      monthlyExpense: monthlyExpenses,
    });
     await expenseMonthlyData.save();
     const maxAge = 3 * 60 * 60 * 24;

    const token = generateToken(savedUser._id);
    
    res.cookie("jwt",token,{maxAge:maxAge*1000});
    const userInfo={
      firstName:userData.firstName,
      lastName:userData.lastName
    };
    res.status(201).json({ message: "Created successfully" ,token:token,userInfo:userInfo});

  
  }
};

//login a user
const postLoginUser = async (req, res) => {
  const maxAge = 3 * 60 * 60 * 24;

  const { email, password } = req.body;
  const user = await userModal.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id);

    res.cookie("jwt", token);
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      userId:user._id
    };
    res.status(200).json({
      user: userData,
      token: token,
    });
  } else {
    res.status(401).json({ message: "Not found" });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

module.exports = {
  getUserData,
  postRegisterUser,
  postLoginUser,
};
