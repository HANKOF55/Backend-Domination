require("dotenv").config();

const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const user = require("./models/user");
const debuglog = require("debug")("development:app");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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