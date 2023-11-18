 const { Schema, model } = require('mongoose')


 const adminSchema = Schema({
    usename: {
        type: String,
        require: true 
    },
    password: {
        type:String,
        required: true
    },
    canCreateAdmin: {
        type: Boolean,
        default: false
    }
    role: {
        type: String,
        default: 'Admin1'
    }
 })