console.log("Hello Monday!");

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
};

let b = 3;

switch (b) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log("The result is strange. Really.");
};

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert('One or zero');
    break;

  case '2':
    alert('Two');
    break;

  case 3:
    alert('Never executes!');
    break;
  default:
    console.log('An unknow value');
}

let browser = prompt("Enter browser");

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

let c = +prompt('a?', '');
switch (c) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}