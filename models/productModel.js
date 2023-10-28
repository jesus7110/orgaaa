const { kMaxLength } = require('buffer');
const { AutoEncryptionLoggerLevel, MongoCryptKMSRequestNetworkTimeoutError } = require('mongodb');
const mongoose = require('mongoose');
const { setFlagsFromString } = require('v8');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});


