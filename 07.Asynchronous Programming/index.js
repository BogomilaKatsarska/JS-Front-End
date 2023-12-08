const baseUrl = `https://restcountries.com/v2/name/`;

const formElement = document.querySelector('.country-form');
const containerElement = document.querySelector('.content');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const country = formData.get('country')

    fetch(`${baseUrl}/${country}`)
        .then(res => {
           return res.json();
        })
        .then((date) => {
            console.log(data);
        })
        .catch(err => console.log(err));
});