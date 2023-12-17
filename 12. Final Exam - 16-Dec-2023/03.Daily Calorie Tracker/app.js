const baseURL = 'http://localhost:3030/jsonstore/tasks'
const loadMealsButton = document.getElementById('load-meals');
const formAddButton = document.getElementById('add-meal');
const formElement = document.getElementById('form');
const formEditButton = document.getElementById('edit-meal');
const mealsList = document.getElementById('list');

const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
loadMealsButton.addEventListener('click', loadMeals);

formEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const mealID = formElement.dataset.meal;

    const mealData = {
        _id: mealID,
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    }

    fetch(`${baseURL}/${mealID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mealData)
    })
        .then(loadMeals)
        .then(() => {
            formAddButton.removeAttribute('disabled');
            formEditButton.setAttribute('disabled', 'disabled');

            clearForm();

            delete formElement.dataset.vacation;
        });
})

formAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (foodInput.value == '' || timeInput.value == '' || caloriesInput.value ==''){
        return;
    }

    const newMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json'
        },
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)
    
    clearForm();
})

function loadMeals() {
    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            renderMeals(Object.values(result));
        })
}

function renderMeals(meals){
    mealsList.innerHTML = '';

    meals
        .map(renderMeal)
        .forEach(mealElement => mealsList.appendChild(mealElement))
}

function clearForm(){
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}

function renderMeal(meal) {
    const container = document.createElement('div');
    container.className = 'meal';

    const h2FoodElement = document.createElement('h2');
    h2FoodElement.textContent = meal.food;

    const h3TimeElement = document.createElement('h3');
    h3TimeElement.textContent = meal.time;

    const h3CaloriesElement = document.createElement('h3');
    h3CaloriesElement.textContent = meal.calories;

    const divButtonsElement = document.createElement('div');
    divButtonsElement.className = 'meal-buttons';

    const changeButton = document.createElement('button');
    changeButton.className = 'change-meal';
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', () => {
        foodInput.value = meal.food,
        timeInput.value = meal.time,
        caloriesInput.value = meal.calories,

        container.remove();

        formEditButton.removeAttribute('disabled');
        formAddButton.setAttribute('disabled', 'disabled');

        formElement.dataset.meal = meal._id;
    })

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-meal';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        fetch(`${baseURL}/${meal._id}`, {
            method: 'DELETE',
        })
        .then(loadMeals);
    })

    divButtonsElement.appendChild(changeButton);
    divButtonsElement.appendChild(deleteButton);

    container.appendChild(h2FoodElement);
    container.appendChild(h3TimeElement);
    container.appendChild(h3CaloriesElement);
    container.appendChild(divButtonsElement);

    return container;
}