const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// cookie-parser -> used for reading cookie data on server from clients browser

app.use(cookieParser())

// Setting up middlewares here

app.use(cors());
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
});

app.get("/error", (req, res, next) => {
    let message = req.flash("error");
    res.send(message);
});


// Storing data in a cookie
app.get("/bann", (req, res, next) => {
    res.cookie("banned", "true");
    res.send("banned");
})

// Reding stored data in a cookie
app.get("/check", (req, res) => {
    console.log(req.cookies.banned);
    res.send("checking");

});




// If no route not found then this code will work
app.get("*", (req, res) => {
    res.send("<h1>Page Not 404!</h1>");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});