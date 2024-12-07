const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String, 
    name: String, 
    email: String,
    password: String,
    age: number, 
})

module.exports = mongoose.model("user", userSchema);