require("dotenv").config;

const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:app");
// const mongoose = require("mongoose");

app.get("/create", async (req, res, next) => {
    const createdUser = await userModel.create({
        username:"Harish",
        name:"Harish",
        email:"harish@gmail.com",
        password: "pass"
    })

    debuglog("User Created");

    res.send("User Created");
})

app.get("/read", async(req, res, next) => {
    const users = await userModel.find();
    debuglog("User Read");
    res.send(users);
})

app.get("/", (req, res, next) => {
    res.send("<h1>This is Home Page.</h1>");
})

// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});