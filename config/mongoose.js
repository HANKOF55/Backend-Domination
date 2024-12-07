const mongoose = require("mongoose");


// connecting to mongodb cluster
// mongoose.connect(`mongodb+srv://UserTesting:ifcHC0EI3UiJUAaS@cluster0.rzurd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// .then(() => {
//     console.log("connected to database");
// }).then(()=> {
//     console.log("Database connected")
// })


//connecting to local mongo db 
mongoose.connect("mongodb://localhost:27017/testingdb")
.then(() => {
    console.log("database connected...");
})


const db = mongoose.connecting;

module.exports = db;