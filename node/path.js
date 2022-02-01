let path = require('path');

//console.log(path);

//let extension = path.extname("/Users/harshitdixit/JP_DEV/module 1/index 2.html");
//console.log(extension);

//upar wali ko direct lena hai toh

console.log(path.extname("/Users/harshitdixit/JP_DEV/module 1/index.html"))

let base = path.basename("/Users/harshitdixit/JP_DEV/module 1/index 2.html");
console.log(base);

console.log(__dirname);
console.log(__filename);