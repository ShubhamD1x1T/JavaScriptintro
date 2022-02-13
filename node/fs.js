//file system
let fs = require("fs");
//console.log(fs);

let path = require("path");


//read a file

let content = fs.readFileSync('file.txt');
//console.log(content+"");

//write a file
//overwrite a file
fs.writeFileSync("file.txt","hellofrom file");

//create a new file

fs.writeFileSync("file2.txt","i am file 2");

//update a file

fs.appendFileSync('file.txt',"how are you");

//delete a file

fs.unlinkSync("file2.txt");

// //read directory    
// let foldercontent = fs.readdirSync(__dirname);
// console.log(foldercontent);

// //check if exists or not
// let isExists = fs.existsSync('new_module');
// console.log(isExists);

// if(isExists == false){
//     //create a directory
//     fs.mkdirSync('new_module');
// }else{
//     // delete a directory
//     fs.rmdirSync('new_module');
// }

 
let isexsist = fs.existsSync('new module');
console.log(isexsist);
//fs.mkdirSync('new module');
if(isexsist == false){
    fs.mkdirSync('new module');
}
else{
    fs.rmdirSync('new module');
}


//copy a file

// fs.copyFileSync(pathOfFileToBeCopied,pathOfDestination)
// let dest = '/Users/harshitdixit/JP_DEV/module 2/js';
// let fileName = 'file.txt';
// let destPath = path.join(dest,fileName);
// console.log(destPath);
// fs.copyFileSync('/Users/harshitdixit/JP_DEV/module 2/node/file.txt',destPath);

//fs.copyFileSync("/Users/harshitdixit/JP_DEV/module 2/node/file.txt","/Users/harshitdixit/JP_DEV/module 2/js/file.txt");