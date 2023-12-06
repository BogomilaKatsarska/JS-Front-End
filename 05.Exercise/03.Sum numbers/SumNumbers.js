function calc() {
    const firstNumElRef = document.getElementById('num1');
    const firstNumValue = firstNumElRef.value;
    const firstNumAsNum = Number(firstNumValue);
    
    const secondNumElRef = document.getElementById('num2');
    const secondNumValue = secondNumElRef.value;
    const secondNumAsNum = Number(secondNumValue);

    const sum = firstNumAsNum + secondNumAsNum;

    document.getElementById('sum').value = sum;
}
