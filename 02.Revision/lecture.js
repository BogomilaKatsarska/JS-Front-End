const arrayOne = [1, 2, 3];
const arrayTwo = arrayOne;

arrayTwo[0] = 12000;

console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayOne[arrayOne.length - 1]);
// Accessing index that does not exist returns 'undefined';

// Destructuring syntax:
let numbers = [1, 2, 3, 4, 5, 6, 7];
let [a, b, ...elems] = numbers;

// For - Of
const nums = [1, 2, 3, 4, 5];
for (const number of nums) {
  console.log(number);
}

// #1.pop - removes the last element of an array and returns that element. changes the length of the array
// #2.push - adds one or more elements to the end of an array amd returns the new length of the array
// #3.shift - removes the first element from an array and returns the removed element. changes the length of the array
// #4. unshift - adds one or more elements to the beginning of an array and returns the new length or the array
// #5. splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements
// #6. reverse - the first element becomes last, and the last element - first
// #7. join - creates and returns a new string by concatenating all of the elements in an arraay, separated by commas/specified separator
let elements = ["Fire", "Air", "Water"];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));
// #8. slice - returns a copy of a portion of an array into a new array object selected frim beginning to end. Original array won't be modified
let fruits = ["banana", "orange", "kiwi", "apple"];
let fruitsForMe = fruits.slice(1, 3); //index-based 1-inclusive, 3-exclusive
console.log(fruitsForMe);
let fruitsCopy = fruits.slice();
console.log(fruitsCopy);
// #9. includes - determines whether an array contains a certain element, returning T or F as appropriate
let arr = ["a", "b", "c"];
arr.includes("a", -100); // second element is to search from index
// #10. indexOf - returns the first index at which a given element can be found in the array
// #11. forEach - executes a provided function once for each array element
const items = ["item1", "item2", "item3"];
const copy = [];
//for loop
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
//forEach
items.forEach((item) => {
  copy.push(item);
});
// #12. map - creates a new array with the results of calling a provided function on every element in the calling array
let numbers1 = [1, 4, 9];
let roots = numbers1.map(function (num) {
  return Math.sqrt(num);
});
// #13. find - returns the first found value in the array, if an element in the array satisfies the provided testing function or undefined if not found
// #14. filter - creates a new array with filtered elements only. Does not mutate the array on which it is called

function func1(...arguments) {
  console.log(arguments);
  console.log(arguments.length);
}

func1(1, 2, 4, 3, 5, 5);

// #15. concat
let greet = "Hello, ";
let firstName = "John";
let result = greet.concat(firstName);

// #16. replace
//let replacedText = Text.replace(".bg", ".com");

// #17. substring

function solve(text, startIndex, count) {
  let substring = text.substring(startIndex, startIndex + count);

  console.log(substring);
}

// # 18. repeat

let n = 3;
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

function censoringWords(sentence, word) {

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    console.log(result);
}

function censoringWords2 (sentence, word) {
  const regex = new RegExp(word, 'g');
  const replacement = '*'.repeat(word.length);
  console.log(sentence.replace(regex, replacement))
}

// #19. trim, trimStart, trimEnd
// #20. startsWith, endsWith
// #21. padStart, padEnd

let regLiteral = /[A-Za-z]+/g
let regExp = new RegExp('[A-Za-z]+', 'g')


// --1-- Sum first and last array elements

function sumFirstLast(input){
    let first = input[0];
    let last = input[input.length -1];
    console.log(first+last);
}

function sumFirstAndLast1(input){
    let first = input.shift();
    let last = input.pop();
    console.log(first + last);
}
sumFirstAndLast1([3, 5, 6, 7, 2])

function reverseAnAarrayOfNumbers(n, inputArr){
    let arrNew = []
    for (i=0; i<=n-1; i++){
        arrNew.push(inputArr[i]);
    }
    result = arrNew.reverse();
    console.log(result);
}
reverseAnAarrayOfNumbers(4, [-1, 20, 99, 50])
reverseAnAarrayOfNumbers(2, [66, 43, 75, 89, 47])

function evenAndOddSubtraction(arrInput){
  let evenNums = 0;
  let oddNums = 0;
  for (let i=0; i < (arrInput.length); i++) {
    const currentNumber = Number(arrInput[i]);
    if (currentNumber % 2 === 0){
      evenNums += currentNumber
    } else {
      oddNums += currentNumber
    }
  }
  result = evenNums - oddNums;
  console.log(result);
}

evenAndOddSubtraction([1,2,3,4,5,6])


function solve(text, search){
  let words = text.split(" ");
  let counter = 0;

  for (const word of words) {
    if (word === search) counter++;
  }

  console.log(counter);
}

