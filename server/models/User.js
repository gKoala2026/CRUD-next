const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    adress: { type: String, default: null }
});


module.exports = mongoose.model("user", userSchema);