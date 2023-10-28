const {Schema, model} = require("mongoose");

module.exports.OTP = model('otp',Schema({
    number: {
        type:String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now, index: {expires:300}}
})
)