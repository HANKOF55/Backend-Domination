require("dotenv").config();

const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const user = require("./models/user");
const { model } = require("mongoose");
const debuglog = require("debug")("development:app");
const usersdata = require("./userdata");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Advance mongodb commands

//insert many 
app.get("/insertmany", async (req, res, next) => {
  const insertedData =  await userModel.insertMany(usersdata);
   res.send(insertedData);
})

// eq operator 
// $ means you are using mongoose operator
app.get("/equal", async(req, res, next) => {
    const equal = await userModel.find({age: {$eq: 25}});
    res.send(equal);
})

// $ne (not equal) operator
app.get("/notequal", async (req, res, next) => {
    const notEqual = await userModel.find({age: {$ne: 25}});
    res.send(notEqual);
})

// $lt (less than) operator
app.get("/lessthan", async (req, res, next) => {
    const lessThan = await userModel.find({age: {$lt: 25}});
    res.send(lessThan);
})

// $lte (less than, and equal to ) operator
app.get("/lessthanequal", async (req, res, next) => {
    const lessThanEqual = await userModel.find({age: {$lte: 25}});
    res.send(lessThanEqual);
})

// $gt (greater than) operator
app.get("/greaterthan", async (req, res, next) => {
    const greaterThan = await userModel.find({age: {$gt: 25}});
    res.send(greaterThan);
})

// $gte (greater than equal) operator
app.get("/greaterthanequal", async (req, res, next) => {
    const greaterThanEqual = await userModel.find({age: {$gte: 25}});
    res.send(greaterThanEqual);
})

// $in operator
app.get("/in", async (req, res, next) => {
    const indata = await userModel.find({age: {$in: [25,27,28,30]}});
    res.send(indata);
})

// $nin (not in) operator
app.get("/nin", async (req, res, next) => {
    const nindata = await userModel.find({age: {$nin: [25,27,28,30]}});
    res.send(nindata);
})

// $exits operator
app.get("/existadmin", async (req, res, next) => {
    const adminExists = await userModel.find( {isAdmin: {$exists: true}});
    res.send(adminExists);
})

// Creating User
app.post("/create", async (req, res, next) => { 

    const { username, name, email, password } = req.body;

    const createdUser = await userModel.create({
        username: username,
        name: name,
        email: email,
        password: password
    })

    debuglog("User Created");

    res.send("User Created");
})

// Reading User
app.get("/read/:username", async(req, res, next) => {
    const users = await userModel.findOne({username: req.params.username});
    
    debuglog("User Read");
    res.send(users);
})

// Updating User
app.post("/update/:username", async (req, res, next) => {
    const { newName, newUsername, newemail, newPass } = req.body; 
    const Updateduser = await userModel.findOneAndUpdate({username:req.params.username}, {
        username: newUsername,
        name: newName,
        email: newemail,
        password: newPass
    }, {new: true});
    res.send(Updateduser);
})

// Deleting user
app.get("/delete/:username", async(req, res, next) => {
    const user = await userModel.findOneAndDelete({name:req.params.username});
    console.log(user);
    res.send("User Deleted.");
})


// Home Route
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