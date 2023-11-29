// #1. Array Rotation:
function arrayStringDemo(arr, rotations) {
  for (i = 0; i < rotations; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  console.log(arr.join(" "));
}
arrayStringDemo([51, 47, 32, 61, 21], 2);

//let secondArr = arr.slice(0);

// #2. Print every N-th Element from an Array

function printNElement(array, step) {
  let output = [];
  let arrayLength = array.length;

  for (let index = 0; index < arrayLength; index += step) {
    output.push(array[index]);
  }

  console.log(output);
}

printNElement([1, 2, 3, 4, 5, 6, 7], 2);
printNElement([1, 2, 3, 4, 5, 6, 7], 3);
printNElement([1, 2, 3, 4, 5, 6, 7], 4);

// #3. List of Names - sorting names

function listOfNames(list) {
  list.sort((a, b) => {
    return a.localeCompare(b);
  });

  let index = 1;
  for (const name of list) {
    console.log(`${index}.${name}`);
    index++;
  }
}

listOfNames(["Bob", "Ala", "Bala"]);

// #4. sorting numbers

function sortingNumbers(arr) {
  let resultArray = [];
  let sortedArray = arr.sort((a, b) => a - b);
  let arrayLength = arr.length;

  for (let index = 0; index < arrayLength; i++) {
    if (index % 2 === 0) {
      resultArray.push(sortedArray.shift());
    } else {
      resultArray.push(sortedArray.pop());
    }
  }

  return(resultArray);
}

// #5. reveal words

function revealWords(string, template){
  let wordsArr = words.split(', ');
  let textArr = text.split(' ');

  for (let i = 0; i < wordsArr.length; i++){
    for (let j=0; j < textArr.length; j++){
      if (textArr[j].includes('*') && textArr[j].length === wordsArr[i].length){
        textArr[j] = wordsArr[i];
      }
    }
  }
  console.log(textArr.join(' '));
}

// #6. Modern times of #(Hashtag)


function hashtagUsage(textToProcess){
  let regex = /#[A-Za-z]+/gm;
  let matches = textToProcess.match(regex);

  for (let word of matches){
    word = word.replace('#', '');
    console.log(word);
  }
}


// #7. String Substring
function stringSubstring(word, text){
  let wordsArray = text.toLowerCase().split(' ');
  let output = `${word} not found!`;

  for (let index=0; index < wordsArray.length; i++){
    let currentWord = wordsArray[index];
    if (currentWord === word){
      output = currentWord;
    }
  }
  console.log(output)
}
// #8. Pascal Case Splitter

function splitPascalCase(){
  
  let wordsRegex = /[A-Z][a-z]*/g;
  let wordsArray = text.match(wordsRegex);
  let resultString = wordsArray.join(', ');
  console.log(resultString)
}