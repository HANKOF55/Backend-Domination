const express = require("express");
const app = express();
const morgan = require("morgan");

// Morgan -> If you want info about client browser, machine, it will give you that on server.
app.use(morgan("dev"));
  
//OR

app.use(morgan("combined"));

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