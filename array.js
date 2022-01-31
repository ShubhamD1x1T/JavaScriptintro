//array declaration

let arr = [1,2,3,4,5];

console.log(arr);

let b = [1,'c',"i am string",true];

console.log(b);
console.log(b[0]); //0th index i.e 1
console.log(b[1]);

console.log("before:",b[1]);

b[1] = "i am replaced";

console.log("after:",b[1]);

b[4] = "newly added";
console.log(b[4]);

b[9]="I am coming";
console.log(b);