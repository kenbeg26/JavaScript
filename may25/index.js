console.log("Im a programmer");

// Data Types

// 1. Number

// 1. Infinity 2. -Infinity
console.log(1 / 0);
console.log(Infinity);

// 3. Nan
console.log("not a number" / 2); // Nan, such division is erroneous
console.log(NaN + 1); // Nan
console.log(3 * NaN); // Nan
console.log("not a number" / 2 - 1);
console.log(NaN ** 0); // 1

// 2. BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// 3. String
/* 3 Types of quotes
    1. Double quotes
    2. Single quotes
    3. Backticks
*/
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(str, str2, phrase);

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!
console.log("the result is ${1 + 2}"); // the result is ${1 + 2} double quotes do nothing

// 4. Boolean (logical type)
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
console.log(isGreater);

// 5. null
let age = null;
console.log(age);

// 6. undefined
let grades;
console.log(grades); // shows "undefined"

let student = 100;

// change the value to undefined
student = undefined;
console.log(student);

// 7. Objects and  8. Symbols

// typeof operator
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "String"); // "string"
console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"
console.log(typeof null); // "object"
console.log(typeof alert); // "function" (3)

// Tasks

let employee = "Ilya";

console.log(`hello ${1}`); // hello 1

console.log(` hello $("employee")`); // hello $("employee")

console.log(` hello ${employee}`); // hello Ilya

// Interaction: alert, prompt, confirm
// alert
//alert("Hello");

//prompt
//result = prompt(title, [default ]);

//let age2 = prompt('How old are you?', 100);

//alert(`You are ${age2} years old!`); // You are 100 years old!31

// let test = prompt("Test", '');

//let isBoss = confirm("Are you the boss?");
//alert(isBoss); // true if OK is pressed

let visitor = prompt('Your name:', "Visitor");

alert(`Welcome ${visitor} to our page!`);



