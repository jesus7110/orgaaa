const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require('otp-generator');

const { User } = require('../models/userModel');
const { Otp } = require('../models/otpModel');

const jwt = require('jsonwebtoken');
const generateAuthToken = (user) => {
    const token = jwt.sign(
      {
        _id: user._id,
        number: user.number, // Use mobileNumber instead of username
        // Add any other user information you want to include in the token
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '2h' } // Token will expire in 2 hours
    );
  
    return token;
  };

module.exports.signUp = async (req, res) => {
    const user = await User.findOne({
        number: req.body.number
    });
    if (user) return res.status(400).send("User already registered!");
    const OTP = otpGenerator.generate(6, {
        digits: true, alphabets: false, upperCase: false, specialChars: false
    });
    const number = req.body.number;
  //  const smsservice = new URLSearchParams();
   // smsservice.append('token', '05fa33c4cb50c35f4a258e85ccf50509');
   // smsservice.append('to', `+${number}`);
    //smsservice.append('message', `Verification Code ${OTP}`);
   /** axios.post('http://api.greenweb.com.bd/api.php', smsservice).then(response => {
        console.log(response.data);
    }); */
    console.log(OTP);
    const otp = new Otp({ number: number, otp: OTP });
    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    return res.status(200).send("Otp send successfully!");
}
module.exports.verifyOtp = async (req, res) => {
    const otpHolder = await Otp.find({
        number: req.body.number
    });
    if (otpHolder.length === 0) return res.status(400).send("You use an Expired OTP!");
    const rightOtpFind = otpHolder[otpHolder.length - 1];
    const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp);

    if (rightOtpFind.number === req.body.number && validUser) {
        const user = new User(_.pick(req.body, ["number"]));
       // const token = user.generateJWT();

        // Generate and send the JWT token in the response
        const authToken = generateAuthToken(user);
        
        // to dev- debug -- delete it during production
        console.log(authToken);
        const result = await user.save();
        const OTPDelete = await Otp.deleteMany({
            number: rightOtpFind.number
        });
        return res.status(200).send({
            message: "User Registration Successfull!",
            authToken,
            data: result
        });
    } else {
        return res.status(400).send("Your OTP was wrong!")
    }
}