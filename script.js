document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData('Nicaragua');
    fetchForecastData('Nicaragua');
});

//Search event listener.
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('#location').value;
    fetchWeatherData(searchInput || 'Nicaragua');
    fetchForecastData(searchInput || 'Nicaragua')
});


async function fetchWeatherData(searchInput) {
    // Fetch Current Weather Data
    try {
        //DOM Manip variables
        const cityName = document.querySelector('#city');
        const countryName = document.querySelector('#country');
        const localTime = document.querySelector('#local-time');
        const weatherIcon = document.querySelector('#current-icon');
        const temperature = document.querySelector('#temperature');
        const wind = document.querySelector('#wind');
        const humidity = document.querySelector('#humidity');

        //fetching data
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e293541b8124423f9be31127240502&q=${searchInput}`, {mode: 'cors'})
        const currentData = await response.json();

        //Place data into the fields.
        cityName.textContent = currentData.location.name;
        countryName.textContent = currentData.location.country;

        weatherIcon.src = currentData.current.condition.icon;
        weatherIcon.alt = currentData.current.condition.text;

        temperature.textContent = `${currentData.current.temp_c}°C`;
        wind.textContent = `${currentData.current.wind_kph}Kph`;
        humidity.textContent = `${currentData.current.humidity}%`;
        localTime.textContent = `${currentData.location.localtime}`;
    
        console.log('Fetching de data from API...', currentData);
    } catch (error) {
        console.error('Something is not working with fetching data', error);
    }
    
}

async function fetchForecastData(searchInput) {
    //Fetch data of the next 3 days.
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e293541b8124423f9be31127240502&q=${searchInput}&days=4`, {mode: 'cors'})
        const forecastData = await response.json();

        //Day 1 (Tomorrow)
        const localTimeDayOne = document.querySelector('#local-time-day1');
        const weatherIconDayOne = document.querySelector('#day1-icon');
        const temperatureDayOne = document.querySelector('#temperature-day1');
        const windDayOne = document.querySelector('#wind-day1');
        const humidityDayOne = document.querySelector('#humidity-day1');

        localTimeDayOne.textContent = forecastData.forecast.forecastday[1].date;
        weatherIconDayOne.src = forecastData.forecast.forecastday[1].day.condition.icon;
        weatherIconDayOne.alt = forecastData.forecast.forecastday[1].day.condition.text;
        temperatureDayOne.textContent = `${forecastData.forecast.forecastday[1].day.avgtemp_c}°C`;
        windDayOne.textContent = `${forecastData.forecast.forecastday[1].day.avgvis_km}Kph`;
        humidityDayOne.textContent = `${forecastData.forecast.forecastday[1].day.avghumidity}%`;

        //Day 2 (Day after Tomorrow)
        const localTimeDayTwo = document.querySelector('#local-time-day2');
        const weatherIconDayTwo = document.querySelector('#day2-icon');
        const temperatureDayTwo = document.querySelector('#temperature-day2');
        const windDayTwo = document.querySelector('#wind-day2');
        const humidityDayTwo = document.querySelector('#humidity-day2');

        localTimeDayTwo.textContent = forecastData.forecast.forecastday[2].date;
        weatherIconDayTwo.src = forecastData.forecast.forecastday[2].day.condition.icon;
        weatherIconDayTwo.alt = forecastData.forecast.forecastday[2].day.condition.text;
        temperatureDayTwo.textContent = `${forecastData.forecast.forecastday[2].day.avgtemp_c}°C`;
        windDayTwo.textContent = `${forecastData.forecast.forecastday[2].day.avgvis_km}Kph`;
        humidityDayTwo.textContent = `${forecastData.forecast.forecastday[2].day.avghumidity}%`;

        //Day 3 (two days from now)
        const localTimeDayThree = document.querySelector('#local-time-day3');
        const weatherIconDayThree = document.querySelector('#day3-icon');
        const temperatureDayThree = document.querySelector('#temperature-day3');
        const windDayThree = document.querySelector('#wind-day3');
        const humidityDayThree = document.querySelector('#humidity-day3');

        localTimeDayThree.textContent = forecastData.forecast.forecastday[3].date;
        weatherIconDayThree.src = forecastData.forecast.forecastday[3].day.condition.icon;
        weatherIconDayThree.alt = forecastData.forecast.forecastday[3].day.condition.text;
        temperatureDayThree.textContent = `${forecastData.forecast.forecastday[3].day.avgtemp_c}°C`;
        windDayThree.textContent = `${forecastData.forecast.forecastday[3].day.avgvis_km}Kph`;
        humidityDayThree.textContent = `${forecastData.forecast.forecastday[3].day.avghumidity}%`;

        console.log('Fetching Forecast data from API...', forecastData);
    } catch (error) {
        console.error('Something is not working with fetching data', error);
    }
    
}

    



