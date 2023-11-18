 const { Schema, model } = require('mongoose')


 const adminSchema = Schema({
    usename: {
        type: String,
        require: true 
    },
    password: {
        
    }
 })