const fs = require("fs");

//Sync...
//fs.writeFileSync("./test.txt", "Hey There");

//Async...
//fs.writeFile("./test.txt", "Hey There Async", (err) => {});

//Sync...
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//Async...

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

//fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

//for copying a file
//fs.cpSync("./test.txt", "./copy.txt");

//for deleting a file
//fs.unlinkSync("./copy.txt");

//for checking a status of a file
//console.log(fs.statSync("./test.txt"));

//for creating a directory
//fs.mkdirSync("my-docs");
