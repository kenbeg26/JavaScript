console.log("Palag Saturday");

let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

let guest = "John";
console.log(guest ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// let height = 0;
// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 500

// let i = 3;
// while (i) { // shows 0, then 1, then 2
//   console.log(i);
//   i--;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//   console.log(i);
// }

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", '');

//   if (!value) break; //(*)

//   sum += value;
// }
// console.log('Sum:' + sum);

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

let i = 3;
while (i) {
  console.log(i--);
}