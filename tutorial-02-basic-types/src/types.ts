// boolean type
let isDone: boolean = false;
console.log(isDone);

// number type
let decimal: number = 6;
console.log(decimal);

let hex: number = 0xf00d;
console.log(hex);

let binary: number = 0b1010;
console.log(binary);

let octal: number = 0o744;
console.log(octal);

// string type

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${fullName}`;

console.log(`I'll be ${age + 1} years old next month.`);

let sentence2: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

console.log(sentence2);

// Array type 1
let list1: number[] = [1, 2, 3];
console.log(list1);

// Array type 2
let list2: Array<number> = [1, 2, 3];
console.log(list2);

// Tuple type

// Declear a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];
console.log(x);
console.log(x[0].substring(1));

// Enum type
enum Color1 {
  Red,
  Green,
  Blue
}
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c2: Color2 = Color2.Green;
console.log(c2);

// Any type
// https://www.typescriptlang.org/docs/handbook/basic-types.html
