const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile_number: { type: String, required: true },
  email_id: { type: String, required: true },
  // Add any other authentication-related fields here, such as password_hash
  addresses: [
    {
      is_available: { type: Boolean, default: true },
      home_no: { type: String },
      building_name: { type: String },
      street_name: { type: String },
      landmark: { type: String },
      pincode: { type: String },
      district: { type: String },
      state: { type: String },
    }
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
