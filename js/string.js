let  str = "This is a string";
console.log(str);

//length

let lengthofstring = str.length;
console.log(lengthofstring);

// Slice(start,end)
let str2 = "It is a string";

let slicedstr = str2.slice(3);
console.log(slicedstr);

let slicedstr2 = str2.slice(5,13);
console.log(slicedstr2);

//replace(valueto be replaced,value to be replaced with)

let replacedstr = str2.replace("is","was");
console.log("replaced string is =",replacedstr);

//touppercas and lowercase

let uppercase = str2.toUpperCase();
console.log(uppercase);

let lowercase = str2.toLowerCase();
console.log(lowercase);

//concatinate

let first = "hello";
let second = "shubham";

//hello shubham

let concatinate = first.concat(second);
console.log(concatinate);

let concatinate2 = first.concat(second,"bhai");
console.log(concatinate2);

//trim

let  text = '          hello people     ';

console.log("text befor trim",text);
console.log("text lengthbefore trim :",text.length);

let trimmedtext = text.trim();
console.log("text after trimming :",trimmedtext);
console.log("text length after trimming :",trimmedtext.length);


