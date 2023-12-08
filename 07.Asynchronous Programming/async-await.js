// const fetchBooks = async() => {
//     ...
// }

async function fetchBooks(){
    try{
        const response = await fetch('https://localhost:3030/jsonstore/collections/books');
        const data = await response.json();

        return data;
    } catch(err) {
        console.log(err);
    }
}

fetchBooks()
    .then(result => {
        console.log(result);
    })