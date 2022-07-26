const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Scheme({
    name: { type: String, default: null },
    email: { type: String, unique: true },
    adress: { type: String, default: null }
})


module.exports = mongoose.model("user", userSchema);