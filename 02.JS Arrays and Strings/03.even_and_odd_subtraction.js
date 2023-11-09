function evenAndOddSubtraction(arr) {
    let sumOfEvenNums = 0;
    let sumOfOddNums = 0;

    for (let index=0; index < arr.length; index++){
        const currentNumber = Number(arr[index]);
        const isEvenNumber = currentNumber % 2 === 0;

        if (isEvenNumber) {
            sumOfEvenNums += currentNumber;
        } else {
            sumOfOddNums += currentNumber;
        }
    }
    console.log(sumOfEvenNums - sumOfOddNums)
}

evenAndOddSubtraction([1,2,3,4,5,6])