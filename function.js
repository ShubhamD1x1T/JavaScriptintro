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


//function is first class citizen in js as whole function can be stroed in one variable

let s = function sub(x,y){
    return x-y;
}
console.log(s(10,2));

//IIFE (Immediately Invoked function Expression)

(function(){
    console.log("I am IIFE");
})();

(function(a,b){
    console.log(a/b);
})(10,5);

//multiplication example withot return

function multi(a,b){
    console.log(a*b);
}
multi(2,3);