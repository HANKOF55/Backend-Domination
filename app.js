require("dotenv").config;

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// connecting to mongodb cluster
mongoose.connect(`mongodb+srv://UserTesting:ifcHC0EI3UiJUAaS@cluster0.rzurd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    console.log("connected to database");
});

app.get("/", (req, res, next) => {
})

// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});