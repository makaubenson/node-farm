const fs = require("fs"); //file system module

// const hello = "Hello World";
// console.log(hello);

//reading file synchronously
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
