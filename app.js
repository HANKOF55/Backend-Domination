const express = require("express");
const app = express();


//Middlewares -> middleware is a function that modifies the request and response objects or performs some action before passing control to the next function in the stack.

// This middleware runs before hitting every route.

app.use("*", (req, res, next) => {
    console.log("running middleware");
    next();
})

app.get("/", (req, res) =>{
    res.send("<h1>This is HOME Page.</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is Contact Page.</h1>");
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});