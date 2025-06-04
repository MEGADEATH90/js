console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/*
The reason is that an quality check == and comparisions >, <, >=, <= work differently.
Comparisions convert null to a number, treatng it as 0.
That's hy (3) null >= 0 is true and (1) null > 0 is false. 
*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === (strict check)
console.log("2" === 2);

