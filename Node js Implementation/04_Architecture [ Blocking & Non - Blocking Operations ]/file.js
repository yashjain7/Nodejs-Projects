
const fs = require("fs");
const os = require("os");

console.log("My PC core cpu size = " + os.cpus().length);

//Sync...Blocking Request
console.log("Blocking Request.....");

console.log("1");

const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log("2");


//Async.....Non Blocking Request
console.log("Non Blocking Request.....");

console.log("3");

fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("4");
console.log("5");
console.log("6");
console.log("7");