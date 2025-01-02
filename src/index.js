import "./style.css";

const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", async function () {
    const search = document.getElementById("search");
    const searchValue = search.value; // Get the value of the input field

    if (searchValue.trim() === "") {
        console.error("Search input is empty.");
        return;
    }

    const data = await getWeatherdata(searchValue); // Wait for data
    if (data) {
        displayWeather(data);
    }
});

async function getWeatherdata(city) {
    try {
        const apiKey = "05cb3aeb4ab54857aae132840243112";
        const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

        const currentResponse = await fetch(currentWeatherUrl);
        const currentData = await currentResponse.json(); // Convert data to JSON

        return currentData; // Return current weather data
    } catch (error) {
        console.error("Error fetching data", error);
        return null;
    }
}

function displayWeather(data) {
    const mainContent = document.getElementsByClassName("main-content")[0];
    if (!mainContent) {
        console.error("Main content container not found.");
        return;
    }

    // Clear previous weather details
    mainContent.innerHTML = "";

    // Create a weather card
    const weatherCard = document.createElement("div");
    weatherCard.className = "weatherCard";

    // Name of the place
    const location = document.createElement("p");
    location.className = "location";
    location.innerHTML = `${data.location.name}, ${data.location.country}`;

    // Weather icon
    const weatherIcon = document.createElement("img");
    weatherIcon.src = data.current.condition.icon;
    weatherIcon.alt = "Weather Icon";

    // Temperature in Celsius
    const temperature = document.createElement("p");
    temperature.className = "temperature";
    temperature.innerHTML = `${data.current.temp_c}°C`;

    // Temperature in Fahrenheit
    const temperatureF = document.createElement("p");
    temperatureF.className = "temperatureF";
    temperatureF.innerHTML = `${data.current.temp_f}°F`;

    // Humidity
    const humidity = document.createElement("p");
    humidity.className = "humidity";
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`;

    // Wind speed
    const wind = document.createElement("p");
    wind.className = "wind";
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;

    // Feels like temperature
    const feelsLike = document.createElement("p");
    feelsLike.className = "feelslike";
    feelsLike.innerHTML = `Feels like: ${data.current.feelslike_c}°C`;

    // Weather condition
    const condition = document.createElement("p");
    condition.className = "condition";
    condition.innerHTML = `Condition: ${data.current.condition.text}`;

    // Append elements to the weather card
    weatherCard.appendChild(weatherIcon);
    weatherCard.appendChild(location);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(temperatureF);
    weatherCard.appendChild(humidity);
    weatherCard.appendChild(wind);
    weatherCard.appendChild(feelsLike);
    weatherCard.appendChild(condition);

    // Append weather card to the main content
    mainContent.appendChild(weatherCard);
}
