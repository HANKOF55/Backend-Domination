const fs = require("fs");

// Creating a file using file module
// fs.writeFile("abc.txt", "Hey Hello", (err) => {
//     if (err) console.log(err);
//     else console.log("File Created");
// })

// Appending data into and existing file
// fs.appendFile("abc.txt", " How are you?", (err) => {
//     if (err) console.log(err);
//     else console.log("Data appended");
// });

// Renaming a file
// fs.rename("abc.txt", "newName.txt", (err) => {
//     if(err) console.log(err);
//     else console.log("File name has been changed.");
// })

// Deleting a file
// fs.unlink("delete.txt", (err) => {
//     if(err) console.log(err);
//     else console.log("File Deleted");
// })

// Creating a Folder
// fs.mkdir("newFolder", (err) => {
//     if(err) console.log(err);
//     else console.log("Folder Created");
// })

// Reading a Folder
// fs.readdir("newFolder", { withFileTypes: true }, (err, file) => {
//     if(err) console.log(err);
//     else console.log(file);
// })


// Deleting a Folder
fs.rm("newFolder", {recursive: true}, (err) => {
    if(err) console.log(err);
    else console.log("Folder Deleted");
})


