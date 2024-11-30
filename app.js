const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");


// CORS -> If you enable cors your all routes can be accessable on any other server.
// This line of code will share all your servers routes 
app.use(cors());

// OR

// You can decide which route you want to share
app.get("/share", cors(), (req, res) => {
    res.send("Share Page.");
})

// Setting up middlewares here

app.use(flash());
app.use( expressSession({
    secret: "randdom stuffs", 
    resave: false,
    saveUninitialized: false,
}))

app.get("/", (req, res) =>{
    res.send("<h1>This is HOME Page.</h1>");
});

// Saving a cookie on browser
app.use("/create", (req, res, next) => {
    req.session.polo = true;
    res.send("done");
});

// Redirecting user on a error page
app.get("/message", (req, res, next) => {
    req.flash("error", "This is an error message");
    res.redirect("/error");
})

app.get("/error", (req, res, next) => {
    let message = req.flash("error");
    res.send(message);
} )

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});