function checkSimilarityAndSum(number){
    const numberStr = number.toString();
    const firstDigit = numberStr[0];
    
    let sum = 0;
    let allDigitsSame = true;

    for (let i=0; i< numberStr.length; i++){
        const digit = numberStr[i];
        if (digit !== firstDigit) {
            allDigitsSame = false;
        }
        sum += parseInt(digit);
    }
    console.log(allDigitsSame);
    console.log(sum);
}

checkSimilarityAndSum(1234)