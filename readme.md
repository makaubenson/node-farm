# Node.Js

![whynode](https://user-images.githubusercontent.com/59168713/185550106-cfbd14bb-c94e-4593-9079-c801966eecd9.png)

```
const hello = "Hello World";
console.log(hello);
```

- To run the code above without browser we write `node index.js` in the terminal.

## Read and Write Files

### reading file synchronously

```
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
```

### writing file synchronously

```
const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");
```

### Blocking and Non-Blocking asynchronous Nature of Node.Js

- Synchronous code is known to be blocking.
- Asynchronous code is known to be non-blocking.

### Why do we use callbacks so much in node.js

- There exists only a single thread in node.js.
- Thus every user or operation will have to wait for the blocking code to execute.

## Read amd write Files asynchronously

```
fs.readFile("./txt/start.txt", (err, data) => {

});
```

- The callback function in `readFile()` receives 2 arguments, error and data. The error is ussualy the first argument.

### Creating Server

```
http.createServer((req, res) => {
  res.end("Hello from the server"); //sending response
});
```
