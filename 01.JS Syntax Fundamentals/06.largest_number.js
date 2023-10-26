// function largest(num1, num2, num3){
//     console.log([num1, num2, num3].sort((a, b)=> a-b)[2]);
//     //return [num1, num2, num3].sort((a, b)=> a-b)[2];
// }
// //console.log([1,2,3].sort((a, b) => a-b));

function printLargestNumber(num1, num2, num3) {
    const numbersArr = [num1, num2, num3];
    const sorterdNumbersArray = numbersArr.sort((a, b) => a-b);
    const largestNum = sorterdNumbersArray[2];

    console.log(`The largest number is ${largestNum}.`);
}