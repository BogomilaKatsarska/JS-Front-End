function censoringWords(sentence, word){
    while (sentence.includes(word)){
        sentence = sentence.replace(word, "*".repeat(word.length));
    }
    console.log(sentence);
}

censoringWords('A small sentence with some words', 'small')


function censoringWordsRegEx(sentence, word){
    const regex = new RegExp(word, "g");
    const replacement = "*".repeat(word.length);
    console.log(sentence.replace(regex, replacement));
}

censoringWordsRegEx("test 1233123123 test", "test");