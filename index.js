const searchButton = document.getElementById('searchButton');
const inputPanel = document.getElementById('inputPanel');
const search_result = document.querySelector('.search-result');
const API_KEY = 'YOUR_API_KEY';
searchButton.addEventListener('submit', async event => {
    event.preventDefault();
    const city = inputPanel.value;
    if (city) {
        try {
            const weatherdata = await getWeatherData(city);
            displayWeather(weatherdata);
        } catch (e) {
            console.error(e);
        }
    }
    else window.prompt('Please enter a valid city')
});
async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${API_KEY}`);
    if (!response.ok) window.prompt('Please enter a valid city');
    return await response.json();
}
function displayWeather(weatherdata) {
    const { name: city, main: temp} = weatherdata;
    search_result.style.display = 'block';
    document.getElementById('CityText').textContent = city;
    document.getElementById('TemperatureText').textContent = `${(temp - 273.15).toFixed(1)}C`;
}