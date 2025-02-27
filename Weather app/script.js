const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".city");
const card = document.querySelector(".card");
const api = "3e8e69cb1d31ffde6aa46c1b557cd086";


weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeaterInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City!")
    }
});

async function getWeatherData(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`; 
    
    const response = await fetch(apiURL);

    if(!response.ok){
        throw new Error("Could not fetch weather data!");
    }

    return await response.json();
}

function displayWeaterInfo(weatherData){
    const {name: city,
           main: {temp, humidity}, 
           weather: [{description, id}]} = weatherData;

    card.textContent = "";
    card.style.display = "flex";

    const cityDiplay = document.createElement("h1");
    const tempDiplay = document.createElement("p");
    const humidityDiplay = document.createElement("p");
    const descDiplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDiplay.textContent = city;
    tempDiplay.textContent = `${(temp - 273.5).toFixed(1)}°C`;
    humidityDiplay.textContent = `Humidity: ${humidity}%`;
    descDiplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDiplay.classList.add("cityDisplay");
    tempDiplay.classList.add("tempDisplay");
    humidityDiplay.classList.add("humidityDisplay");
    descDiplay.classList.add("weatherDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.append(cityDiplay);
    card.append(tempDiplay);
    card.append(humidityDiplay);
    card.append(descDiplay);
    card.append(weatherEmoji); 
}

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    console.error(errorDisplay);
}

function getWeatherEmoji(id){
    switch(true){
        case (id >= 200 && id < 300):
            return "⛈️";
        case (id >= 300 && id < 400):
            return "🌧️";
        case (id >= 500 && id < 600):
            return "☔️";
        case (id >= 600 && id < 700):
            return "❄️";
        case (id >= 700 && id < 800):
                return "🌥️";
        case (id === 800):
            return "☀️";
        case (id >= 801 && id < 810):
            return "☁️";
        default:
            return "🥱";     
    }
}