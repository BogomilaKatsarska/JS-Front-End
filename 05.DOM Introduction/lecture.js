// console.log('external file');

let button = document.getElementsByTagName('button')[0];
console.log(button);

let heading = document.getElementsByTagName('h1')[0];
// 'innerHTML' replaces the HTML of a given page
// If you provide a html tag, it will be parsed 
heading.innerHTML = 'another thing';

// 'textContent' replaces the text
let innerText = document.getElementsByTagName('p')[0];
innerText.textContent = 'alabala'
// 'style' changes CSS
innerText.style.background = 'red';

// 'value'
let inputElement = document.getElementsByTagName('input')[0];
console.log(inputElement.value)

let inputNumberElement = document.getElementsByTagName('input')[1];
//.value is always a string, unless parsed to number with Number()
console.log(inputNumberElement.value + 12)
console.log(Number(inputNumberElement.value) + 12)


document.getElementsByTagName()
document.getElementById() //returns a signle element
document.getElementsByClassName('list')
document.getElementsByTagName()
document.querySelector('p.blue') //returns the first occurence
document.querySelectorAll()

// NodeList vs HTMLCollection

//Iterating Element Collections
const elements = document.querySelectorAll('p');
for(const currentElemnt of elements){
    console.log("Current paragraph printer: ", currentElemnt);
}

//Convert HTMLCollection to Array:
const elementArray = Array.from(elements);

//Hidden property - style:
const el2 = document.getElementById('main');
el2.style.display = 'none';
el2.style.display = ''; //reveals the element