// objects: key value pair like hashmap

// let obj = {};

// console.log(obj);

// let person = {
//     name : 'Shubham',
//     age:20,
//     phone:'xxxxx'
// }
// console.log(person);

// let cap = {
//     Firstname:"Steve",
//     Lastname:"rogers",
//     friends : ['bucky','tony'],
//     age: 105,
//     isFirstavenger:true,
//     address:{
//         state:'Queens',
//         city:'la'
//     },
//     sayhi:function(){
//         console.log('captain says hi');
//     }
// }
// console.log(cap);

// //print only first name

// console.log(cap.Firstname);

// console.log(cap['Lastname']);

// console.log(cap.friends);

// console.log(cap.friends[1]);

// console.log("age is =",cap.age);

// console.log("is true avenger",cap.isFirstavenger);

// console.log(cap.address.city);

// console.log(cap.address['state']);

// console.log(cap.sayhi);

// //function ko call

// // cap.sayhi();

// //loop through obejt and keys

// // for(let key in cap){
// //     console.log("key:",key,"value :",cap[key]);
// // }

// //add a new key value pair in nexsisting object

// // console.log("befor adding :",cap);

// // cap.movies = ['avengers','wintersoldier'];

// // console.log("after adding :",cap);

// //update an exsisting value

// //cap.isFirstavenger = false;
// //console.log("after update :",cap);

// //delete a key value pair

// // delete cap.movies[0];

// // console.log("movie deleted :",cap);


// //example

let shubham = {

    Firstname : "shubham",
    Lastname : "Dixit",
    friends : ["a","b","c"],
    age : 23,
    address : {
        city : "ajmer",
        state : "rajasthan",
    },
    sayhi : function(){
        console.log("Shubham syas hi");

    }


}

console.log(shubham);

console.log(shubham.Firstname);

console.log(shubham['Lastname']);

console.log(shubham.friends[0]);

delete shubham.friends[0];

console.log(shubham);

shubham.sayhi();

for(let key in shubham){
    console.log(key,[key]);
}
