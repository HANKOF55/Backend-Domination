const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/profile", (req, res) => {
    res.render("profile");
})

// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});