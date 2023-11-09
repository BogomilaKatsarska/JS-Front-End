"use strict";
function substring(text, startIndex, endIndex) {
    let resultString  = text.substr(startIndex, endIndex);
    console.log(resultString);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);

function substringSecond(str, ...args) {
    const startIndex = args[0];
    const count = args[1];

    const result = str.substring(startIndex, startIndex + count);
    console.log(result);
}