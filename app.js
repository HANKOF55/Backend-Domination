const express = require("express");
const app = express();

// always create server response in try or catch block. It's a good practice.
app.get("/", (req, res, next) => {
    try{
        res.send(hey);
    }
    catch (err){
        next(err);
    }
})

// Basic Error Handler in Express server
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})


// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});