console.log("Hellooooooooo!");
let a = 5;
let b = 10;

if (b > a) {
  console.log(b);
} else {
  console.log("a is bigger");
}

function test(startMessage) {
  console.log(startMessage);
}

test("ala bala nica");

// hello + again => helloagain

function solve(name, grade) {
  console.log("The name is: " + name + ", grade " + grade);
  console.log(`The name is: ${name},  ${grade.toFixed(2)}`);
}
solve("Peter", 3.55);

console.log(1 == "1");
console.log(1 === "1");

const isValid = true;
const result = isValid ? "It is valid" : "It is not valid";
console.log(result);

// #5 Math Operations

function solve(num1, num2, operator) {
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  console.log(result)
}

console.log(typeof a);


for (let i=1; i <=5; i++){
    console.log(i);
}

let i = 1
while (i<=5){
    console.log(i);
    i++
}

// #1.
function multiplicator(num){
    console.log(num*2);
}

// #2.
function studentInfo(name, age, grage){
    console.log(`Name:${name}, Age:${age},Grade ${grage.toFixed(2)}`)
}

// #3,
function gradeExcellent(num){
    if (num>=5.50){
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}


// #4.

function monthPrinter(num){
    const isNotValidMonth = num < 1 || num > 12;

    if (isNotValidMonth) console.log('Error!');

    switch (num){
        
        case 1:
            console.log('January');
            break;
    }

}

// #6.

function largestNum(n1, n2, n3){
    console.log(Math.max(n1,n2,n3));
}

largestNum(4, 7, 5);