const express = require("express");
const app = express();

app.set("view engine", "ejs");

// This code allows you to access the data entered by user in your console. 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/register", (req, res) => {

    // If method -> GET -> req.query 
    // If method -> POST -> req.body

    console.log(req.query);
    res.send("User Registered.");
});


// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});