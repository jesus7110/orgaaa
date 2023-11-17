const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    number: {
        type: String,
        required: true
    },
    emailid: { type: String},
    isavailable: { type: Boolean, default: false },
    homeno: { type: String },
    streetname: { type: String },
    landmark: { type: String },
    pincode: { type: String },
    city: { type: String },
    state: { type: String },
}, { timestamps: true });

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        number: this.number
    }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    return token
}

module.exports.User = model('User', userSchema);