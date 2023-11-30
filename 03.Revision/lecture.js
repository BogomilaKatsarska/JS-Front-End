// Function declaration
function printText(text) {
  console.log(text);
}

//Function expression
let printText2 = function (text) {
  console.log(text);
};

// Recursion
function countDown(x) {
  console.log(x);

  if (x > 0) {
    countDown(x - 1);
  }
}

function mathPower(num, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= num;
  }
  console.log(result);
}

// Arrow functiohns

const increment = (x) => x + 1;
console.log(increment(5));

let increment2 = function (x) {
  return x + 1;
};

let sum = (a, b) => a + b;
console.log(sum(5, 6));

function calculate(x, y, operator) {
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;

  switch (operator) {
    case "multiply":
      console.log(multiply(x, y));
      break;
    case "divide":
      console.log(divide(x, y));
      break;
    case "add":
      console.log(add(x, y));
      break;
    case "subtract":
      console.log(subtract(x, y));
      break;
  }
}

function printArguments() {
    console.log(...arguments);
}
