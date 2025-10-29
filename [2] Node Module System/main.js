// Global Objects

// console.log(__dirname);   //__dirname
// console.log(__filename);   //__filename
// console.log(module);   //module
// console.log(exports);   //exports
// console.log(require);   //require

const calc = require("./calc");
const os = require("node:os");
const fs = require("node:fs");

console.log(calc.add(1, 2));
console.log(os.freemem());
console.log(os.totalmem());

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
