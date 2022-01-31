//Normal function

function sayHi(){
    console.log("Function says hii");
}

sayHi();

//function accepting parameter

function add(a,b){
    console.log("addition of given number is =",a+b);
}


add(4,5);



function mul(a,b){
    return a*b;
}
let prod = mul(2,3);
console.log(prod);


//function is first class citizen in js

let a = function sub(x,y){
            return x-y;
        }

console.log(a(10,2));


//IIFE (Immediately invoked function Expression)

(function(){
    console.log("I am IIFE");
})();


//IIFE with parameter

(function(a,b){
    console.log(a/b);
})(10,2); 



