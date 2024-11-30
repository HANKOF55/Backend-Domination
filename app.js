const express = require("express");
const app = express();

// Understanding dynamic routing 

// 1st pattern
app.get("/profile/:username", (req, res) => {
    res.send(req.params.username + "s Page");
})

// 2nd pattern
app.get("/author/:username/:age", (req, res) => {
    res.send(`something about ${req.params.username} of ${req.params.age}`);
});



app.get("/", (req, res) =>{
    res.send("<h1>This is HOME Page.</h1>");
});

// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});