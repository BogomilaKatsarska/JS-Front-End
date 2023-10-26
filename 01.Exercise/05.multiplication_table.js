function multiplication(number) {
    let result;

    for (let i = 1; i <= 10; i++) {
        result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
}

multiplication(5);
multiplication(2);