function pow(num, power){
    let result = 1;
    for (let i=0; i < power; i++){
        result *=num;
    }
    console.log(result);
}

function powTwo(num, power){
    console.log(Math.pow(num, power));
}