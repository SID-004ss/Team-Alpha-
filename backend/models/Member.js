const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String
  },
  role: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  degree: {
    type: String
  },
  project: {
    type: String
  },
  hobbies: {
    type: String
  },
  certificate: {
    type: String
  },
  internship: {
    type: String
  },
  aim: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("Member", memberSchema);