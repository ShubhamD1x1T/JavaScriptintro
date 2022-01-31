//array declaration

let arr1 = [1,2,3,4,5];

console.log(arr1);

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

// Array Operations

//1.push

let arr = [1,2,3,4,5];

console.log("befor push",arr);

arr.push(6);

console.log("after push",arr);

//2.pop

console.log("before pop",arr);
arr.pop();
console.log("after pop",arr);

//3.shift

console.log("before shift",arr);
arr.shift();
console.log("after shift",arr);

//4.Unshift

console.log("before unshift",arr);
arr.unshift(6);
console.log("after unshift",arr);