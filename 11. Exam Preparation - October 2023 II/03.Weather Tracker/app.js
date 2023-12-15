const baseUrl = "http://localhost:3030/jsonstore/tasks";

const addWeatherBtn = document.getElementById("add-weather");
const editWeatherBtn = document.getElementById("edit-weather");
const loadHistoryBtn = document.getElementById("load-history");

const historiesList = document.getElementById("list");

const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");
const formElement = document.getElementById("form");

loadHistoryBtn.addEventListener("click", loadHistory);
addWeatherBtn.addEventListener("click", (e) => {
  e.preventDefault();

   if (locationInput.value =='' || temperatureInput.value == '' || dateInput.value == ''){
    return;
  }

  const newWeather = {
    location: locationInput.value,
    temperature: temperatureInput.value,
    date: dateInput.value,
  };


  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWeather),
  }).then(loadHistory);

  clearForm();
});

editWeatherBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const historyId = formElement.dataset.history;

  const historyData = {
    _id: historyId,
    location: locationInput.value,
    temperature: temperatureInput.value,
    date: dateInput.value,
  };

  fetch(`${baseUrl}/${historyId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(historyData),
  })
    .then(loadHistory)
    .then(() => {
      addWeatherBtn.removeAttribute("disabled");
      editWeatherBtn.setAttribute("disabled", "disabled");
    

      clearForm();

      delete formElement.dataset.history;
    });
});

function loadHistory() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((result) => {
      //console.log(result);
      renderHistories(Object.values(result));
    });
}

function clearForm() {
  locationInput.value = "";
  temperatureInput.value = "";
  dateInput.value = "";
}

function renderHistories(histories) {
  historiesList.innerHTML = "";

  histories
    .map(renderHistory)
    .forEach((historyElement) => historiesList.appendChild(historyElement));
}

function renderHistory(history) {
  const container = document.createElement("div");
  container.className = "container";

  const h2Element = document.createElement("h2");
  h2Element.textContent = history.location;

  const h3DateElement = document.createElement("h3");
  h3DateElement.textContent = history.date;

  const h3TemperatureElement = document.createElement("h3");
  h3TemperatureElement.textContent = history.temperature;
  h3TemperatureElement.setAttribute("id", "celsius");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("id", "buttons-container");

  const changeButton = document.createElement("button");
  changeButton.className = "change-btn";
  changeButton.textContent = "Change";
  changeButton.addEventListener("click", () => {
    locationInput.value = history.location;
    temperatureInput.value = history.temperature;
    dateInput.value = history.date;

    container.remove();

    editWeatherBtn.removeAttribute("disabled");
    addWeatherBtn.setAttribute("disabled", "disabled");
    formElement.dataset.history = history._id;
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    fetch(`${baseUrl}/${history._id}`, {
      method: "DELETE",
    }).then(loadHistory);
  });

  buttonsContainer.appendChild(changeButton);
  buttonsContainer.appendChild(deleteButton);

  container.appendChild(h2Element);
  container.appendChild(h3DateElement);
  container.appendChild(h3TemperatureElement);
  container.appendChild(buttonsContainer);

  historiesList.appendChild(container);

  return historiesList;
}
