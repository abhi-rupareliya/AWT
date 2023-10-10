const mongoose = require("mongoose");

const personalinfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Personalinfo = mongoose.model("Personalinfo", personalinfoSchema);
module.exports = Personalinfo;
