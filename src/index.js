import "./style.css";

const mainContent=document.getElementsByClassName("main-content");

async function getWeatherdata(city){
    const apiKey='05cb3aeb4ab54857aae132840243112';
    const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const forecastWeatherUrl= `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
    try{
        const response = await fetch(apiUrl);//wait utill data is collected 
        
        if(!response.ok){
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    }catch(error){
        console.error('Error fetching data',error);
    }
}


function displayWeather(data){

    const detailsDiv = document.createElement('div');//cotainer
    detailsDiv.classList.add('details');

    const location = document.createElement('p');
}