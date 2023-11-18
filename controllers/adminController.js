const bcrypt = require("bcrypt")
const _ = require("lodash")
const axios = require("axios")


const { Admin } = require('../models/adminModel');



module.exports.admin = async (req, res) => {
    const admin = await Admin.findOne({
        username: req.body.username
    });

    
}