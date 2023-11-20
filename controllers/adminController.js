const bcrypt = require("bcrypt")
const _ = require("lodash")
const axios = require("axios")


const { Admin } = require('../models/adminModel')



module.exports.adminSignup = async (req, res) => {
    const admin = await Admin.findOne({
        username: req.body.username
    });

    if (admin) return res.status(400).send("Admin  already existed!");

    const username = req.body.username;
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    const newadmin = new Admin({ username: username, password: password });
    const result = await newadmin.save();
    return res.status(200).send("Admin saved Successfully");
    
}

module.exports.adminLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the admin exists
      const admin = await Admin.findOne({ username });
  
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
      }
  
      // Check if the provided password is correct
      const isPasswordValid = await bcrypt.compare(password, admin.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }
      
      // Generate and store an access token with a 2-hour expiration
    const accessToken = admin.generateAccessToken();
    await admin.save();
  
      // Log in successful
      return res.status(200).json({ success: true, message: 'Admin logged in successfully', data: admin });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'An error occurred during admin login.', error });
    }
  };