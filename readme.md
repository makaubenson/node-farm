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
