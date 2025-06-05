// Primitve
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "kaibalya",
    age: 22,
}

const myFun = function(){
    console.log("Hello world");
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYtName = "Mr__solo_biker"
let anotherName = myYtName
console.log(myYtName);
anotherName = "Mr_biker"
console.log(anotherName);



let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let user2 = user1

user2.email = "kai@gmail.com"
console.log(user1.email);
console.log(user2.email);

