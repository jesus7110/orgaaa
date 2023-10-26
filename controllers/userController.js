const userModel = require('../models/userModel');
const otpGenerator = require('otp-generator');

const createUser = async (req,res) => {
  try {
    const exisitingUser = await userModel.findOne({ mobile: req.body.mobilenumber });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const newUser = new userModel(req.body);
    
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true }); 
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
// Function to fetch all user data


//function to genrate login-signup otp
const generateOTP = (req,res) => {
  try {
    const genaratedOTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    console.log(genaratedOTP);
    res.status(201).send({ message: "OTP genarated Sucessfully", success: true }); 
     
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `OTP Generator ${error.message}`,
    });
  }
};

module.exports = { createUser, generateOTP};
