console.log("Happy tuesday");

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

console.log("6" / "2");

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

let age = Number("an arbitrary string instead of a number");
console.log(age); // Nan, conversion failed

console.log(Number(" 123 ")); // 123
console.log(Number("123z")); // Nan (error reading a number at "z");
console.log(Number(true)); // 1
console.log(Number(false));

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false

console.log(Boolean("hello")); //true
console.log(Boolean("")); // false

console.log(Boolean("0")); // true
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)

let x = 1;

x = -x;
console.log(x); // -1, unary negation was applied

let a = 1, b = 3;
console.log(b - a); // 2, binary minus substracts values

// Remainder %
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(8 % 4); // 0

// Exponentatiation
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

console.log(4 ** (1 / 2)); // 2
console.log(8 ** (1 / 3)); // 2

let s = "my" + "string";
console.log(s); //mystring

console.log('1' + 2); //"12"
console.log(2 + '1'); //"21"

console.log(2 + 2 + '1'); // "41" and not 221

console.log('1' + 2 + 2); // "122" and "14"

console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers

// No effect on numbers
let c = 1;
console.log(+c); // 1

let d = -2;
console.log(+d); // -2

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
// console.log(Number(apples) + Number(oranges)); // 5

let e, f, g;
e = f = g = 2 + 2;

console.log(e); // 4
console.log(f); // 4
console.log(g); // 4

let n = 2;
n = n + 5;
n = n * 2;

let counter = 1;
console.log(2 * counter);
++counter;


