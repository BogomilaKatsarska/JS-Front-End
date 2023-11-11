function repeat(str, n){
    let result = '';
    for (let i=0; i<n; i++){
        result += str;
    }
    return result;
}

function repeatText(str, repetitionCount){
    return str.repeat(repetitionCount);
}

const repeatStr = (str, count) => str.repeat(count)