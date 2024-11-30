const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

// Flash -> getting data on a route and using it on some other route.


// Cookies -> For saving data on Browsers.
// Express Session -> For Saving data on Server.


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