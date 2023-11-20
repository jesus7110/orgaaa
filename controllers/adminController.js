const bcrypt = require("bcrypt")
const _ = require("lodash")
const axios = require("axios")


const { Admin } = require('../models/adminModel');



module.exports.adminSignup = async (req, res) => {
    const admin = await Admin.findOne({
        username: req.body.username
    });

    if (admin) return res.status(400).send("Admin  already existed!");

    const password = await bcrypt
    
}