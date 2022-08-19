const fs = require("fs"); //file system module

// const hello = "Hello World";
// console.log(hello);

//reading file synchronously
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
//writing file synchronously
const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

//non-blocking , asynchronous way
//reading file asynchronously
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  //   console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
    });
  });
});
console.log("will read file");
