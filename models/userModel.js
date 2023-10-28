const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobilenumber: { type: String },
  emailid: { type: String},
  isavailable: { type: Boolean, default: true },
  homeno: { type: String },
  streetname: { type: String },
  landmark: { type: String },
  pincode: { type: String },
  city: { type: String },
  state: { type: String },
  
  
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
