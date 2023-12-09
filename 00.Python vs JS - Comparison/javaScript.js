//1. Conditionals, functions, loops:
const x = 4;

if (x < 5) {
    console.log(x);
}

function foo(x){
    console.log(x);
}

console.log(foo(3))


//2. Defining a variable
let a = 5;
const b = 6;

//3. Naming conventions: lowerCammelCase

firstName = 'Bogomila';

//4. Constants: we can define constants that cannot be changed in the program,
//and the variable identifier cannot be reassigned.

const TAX_RATE_PERCENTAGE = 32;

// 5.Data types and values: Number(for both int and float) and BigInt

//6. None vs null:
// - null: a variable does not have a value at a particular point in the program 
// - undefined: when we declare a variable without assigning an initial value

// 7.Primitive data types: undefined, Boolean, String, Number, BigInt, Symbol and Null

// 8.Built-in Data Structures: 
// - No such thing as tuple 
// - Here we have arrays instead of lists

// 9. Floor division: 
console.log(Math.floor(5/6));

// 10. Comparing values:
console.log(1=="1");
console.log(1==="1");

// 11. Logical operators: && || !
// 12. Type operators:
console.log(typeof('abc'));

// 13. Input and Output: we use window.prompt(message)
var input = window.prompt("Enter a number")

// 14.Loops:
let i=6;
for (let i = 0; i < n; i++){
    console.log(i);
}
//we use for..of loop to iterate over the elements of an iterable
for(let el of iterable){
    console.log(iterable[el]);
}
//we use for..in loops to iterate over the properties of an object
const obj = {a:1, b:2, c:3};
for (const property in object){
    console.log(property, object[[property]]);
}
// while loops:
while (condition){
    ...
}
// do..while - it does something at least once and it continues running while a condition is True
do {
    //code
} while (condition);

// 15. Classes:
class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    calcDiameter(){
        return this.radius * 2;
    }
}

myCircle = new Circle(5, "Red");

// BONUS: SWITCH - CASE: 
switch(expression){
    case value1:
        //code
        break;
    case value2:
        //code
        break;
    default:
        //code
}