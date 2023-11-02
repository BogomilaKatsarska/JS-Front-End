function cookingByNumbers(numAsString, op1, op2, op3, op4, op5){
    let num = Number(numAsString);
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);

    // console.table(arrOp)
    for (let i = 0; i < arrOp.length; i++){
        let currentOperation = arrOp[i];
        switch(currentOperation){
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *=3;
                break;
            case 'fillet':
                num *= 0.80;
                break;
        }
        console.log(num);
    }
}