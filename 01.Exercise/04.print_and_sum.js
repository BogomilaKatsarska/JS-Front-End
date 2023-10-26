function printAndSum(num1, num2) {
    let sum = 0;
    const numbers = [];
    
    for (let i = num1; i <= num2; i++) {
        sum += i;
        numbers.push(i);
    }

    console.log(numbers.join(" "));
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);