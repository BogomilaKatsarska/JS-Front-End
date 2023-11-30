// #1.
function smallestNumber(first, second, last){
    console.log(Math.min(first, second, last));
}

// #2
function addAndSubtract(first, second, third){
    let sum = (first, second) => {
        return first + second;
    }

    let subtract = (sum, lastNumber) => {
        return sum - lastNumber;
    }

    console.log(subtract(sum(first, second), third));
}

// #3 ASCII
function charactersInRange(firstChar, secondChar){
    let result = '';
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    
    for (let currentCode= start+1; currentCode < end; currentCode++){
        const currentChar = String.fromCharCode(currentCode);

        result += `${currentChar} `;
    }

    console.log(result.trimEnd())
}
// #4
function oddAndEvenSum(number){
    let numerAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numerAsString.length; index++){
        let d=currentDigit = Number(numerAsString[index]);

        if (currentDigit % 2 === 0){
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }
}

// #5
function palindromeIntegers(arr){

    function isPalindrome(num){
        let numAsString = num.toString();
        let reversedNum = numAsString.split(' ').reverse().join(' ');

        return numAsString === reversedNum;
    }
    
    for(const currentNumber of arr) {
        console.log(isPalindrome(currentNumber));
    }

}

// #6
function passwordValidator(password){
    function isValidLength(text){
        return text.length >= 6 && text.length <=10;
    }
    if (!isValidLength(password)){
        console.log('Password must be between 6 and 10 characters');
    }
    function isAlphaNumeric(text){
        let regex = /^[a-zA-z0-9]+$/;
        let isCorrect = regex.test(text);

        return isCorrect;
    }
    if (!isAlphaNumeric(password)){
        console.log('Password must consist only of letters and digits')
    }
    function checkDigits(text){
        let digitsCounter = 0;

        for (const digit of text){
            if (!isNaN(digit)){
                digitsCounter++;
            }
        }
        return digitsCounter >= 2;
    }

    if (!checkDigits(password)){
        console.log('Password must have at least 2 digits');
    }

    if (checkDigits && isAlphaNumeric && isValidLength){
        console.log('Password is valid')
    }
}

// #7
function nNMatrix(number){
    function printRow(num){
        let singleRow = (num.toString() + ' ').repeat(num);
        return singleRow;
    }

    for (let currentRow = 1; currentRow <= number; currentRow++){
        console.log(printRow(number));
    }
}

// #8
function perfectNumber(number){
    let sum = 0;
    for(let current = 1; current < number; current++){
        if(number % current === 0){
            sum += current;
        }
    }
    if (sum === number){
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.")
    }
}

// #9
function loadingBar(number){
    if (number === 100){
        console.log('100% Complete!');
    } else {
        let percentCount = '%'.repeat(number / 10);
        let dotsCount = ('.').repeat(10-(percentCount.length));
        console.log(`${number}% [${percentCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}

loadingBar(40);