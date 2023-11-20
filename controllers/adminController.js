const bcrypt = require("bcrypt")
const _ = require("lodash")
const axios = require("axios")
con

const { Admin } = require('../models/adminModel')



module.exports.adminSignup = async (req, res) => {
    const admin = await Admin.findOne({
        username: req.body.username
    });

    if (admin) return res.status(400).send("Admin  already existed!");

    const newadmin = new Admin({ username:username, password: password });


    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(newadmin.password, salt)

    const result = await newadmin.save();
    return res.status(200).send("Admin saved Successfully");
    
}