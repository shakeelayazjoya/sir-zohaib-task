const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
