const{ User } = require('../models/user');
const { Otp } = require('../models/otpModel ')
const otpGenerator = require('otp-generator');
const bcrypt = require("bcrypt");
const axios = require("axios")
const _= require("lodash")

//const { otpGen } = require('otp-gen-agent');

const createUser = async (req,res) => {
  try {
    const exisitingUser = await User.findOne({ mobile: req.body.mobilenumber });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const newUser = new User(req.body);
    
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true }); 
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};// Function to fetch all user data


// Function to fetch all user data
// Function to fetch all user data
//function to genrate login-signup otp
/*const generateOTP = (req,res) => {
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
};*/

/*
const generateOTP = async (req,res) => {
  try{
    const otp = await otpGen({length: 5, chars: 'abc123'});
    console.log(otp);
    res.status(201).send({ message: "OTP genarated Sucessfully", success: true }); 
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `OTP Generator ${error.message}`,
    });
  }
}*/

module.exports.signUp = async (req,res) => {
  const user = await UserActivation.findOne({
    number: req.body.number
  })
  if (user) return res.status(400).send("User already registered!");
  const OTP = otpGenerator.generate(5, {
    digits: true, alphabets: false, upperCase: false, specialChars:false
  });

  const number = req.body.number;
  console.log(OTP);
  const otp = new Otp({number: number, otp: OTP});
  const salt = await bcrypt.genSalt(10)
  otp.otp = await bcrypt.hash(otp.otp, salt);
  const result = await otp.save();
  return res.status(200).send("Otp send successfully!");


}

module.exports.verifyOtp = async (req,res) => {

}
module.exports = { createUser, generateOTP};
