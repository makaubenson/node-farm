const fs = require("fs"); //file system module
const http = require("http");
const url = require("url");
/////////////////////////
////// FILES////////////
// const hello = "Hello World";
// console.log(hello);

//reading file synchronously
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);
// //writing file synchronously
// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

//non-blocking , asynchronous way
//reading file asynchronously
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   //   console.log(data1);
//   if (err) return console.log("ERROR!!");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("File has been written");
//         }
//       );
//     });
//   });
// });
// console.log("will read file");

//SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
//creating server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW"); //sending response
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT"); //sending response
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data); //sending response
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>PAGE NOT FOUND!</h1>");
  }
});
//listening to requests(starting the server)
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
