"use strict";
// boolean type
let isDone = false;
console.log(isDone);
// number type
let decimal = 6;
console.log(decimal);
let hex = 0xf00d;
console.log(hex);
let binary = 0b1010;
console.log(binary);
let octal = 0o744;
console.log(octal);
// string type
let fullName = `Bob Bobbington`;
let age = 37;
let sentence1 = `Hello, my name is ${fullName}`;
console.log(`I'll be ${age + 1} years old next month.`);
let sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence2);
// Array type 1
let list1 = [1, 2, 3];
console.log(list1);
// Array type 2
let list2 = [1, 2, 3];
console.log(list2);
// Tuple type
// Declear a tuple type
let x;
// Initialize it
x = ["hello", 10];
console.log(x);
console.log(x[0].substring(1));
// Enum type
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
console.log(c2);
