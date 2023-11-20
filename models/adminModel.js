 const { Schema, model } = require('mongoose')
 const jwt = require('jsonwebtoken')

 const adminSchema = Schema({
    username: {
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
    },
    role: {
        type: String,
        default: 'Admin1'
    },
    accessToken: {
        type: String
    }
 })

 // Set up a method to generate an access token with a 2-hour expiration
adminSchema.methods.generateAccessToken = function () {
    const token = jwt.sign(
      {
        _id: this._id,
        username: this.username,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '2h' } // Token will expire in 2 hours
    );
  
    this.accessToken = token; // Store the generated token in the accessToken field
    return token;
  };

 module.exports.Admin = model('Admin', adminSchema);