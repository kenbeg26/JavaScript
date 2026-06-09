console.log("Hello tuesday!");

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log(message);
// }

// showMessage(); // Hello, I'm JavaScript!

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log(userName); // John before the function call

// showMessage();

// console.log(userName); // Bob, the value was modified by the function

// function showMessage(from, text) {
//   console.log(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?") // Ann: What's up? (**)

// function showMessage(from, text = "no text given") {
//   console.log(from + ": " + text);
// }

// showMessage("Ann"); // Ann: notext given
// showMessage("Ann", undefined); // Ann: no text given

// function showMessage(from, text = anotherFunction()) {
//   // anotherFunction() only executed if no text given
//   // its result becomes the value of text
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm
// }

function returnLowest(a, b) {
  if (a < b) {
    return console.log(a);
  }
  return console.log(b);
}

returnLowest(2, 5);

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
