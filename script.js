const apikey = '5a89e160282affc69ffacce3e5a06324';

async function checkweather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        alert("City not found");
        return;
    }
    const data = await response.json();
    console.log(data);
    const disweather = document.querySelector('.weather');
    const weather_icon = document.querySelector('.weather-icon');
    // Update the DOM with the fetched data
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
    if (data.weather[0].main === 'Clouds') {
        weather_icon.src = 'images/clouds.png';
    } else if (data.weather[0].main === 'Clear') {
        weather_icon.src = 'images/clear.png';
    } else if (data.weather[0].main === 'Rain') {
        weather_icon.src = 'images/rain.png';
    } else if (data.weather[0].main === 'Drizzle') {
        weather_icon.src = 'images/drizzle.png';
    } else if (data.weather[0].main === 'Mist') {
        weather_icon.src = 'images/mist.png';
    }
    
    disweather.style.display = 'block';
}

// Handle the search button click
document.querySelector('button').addEventListener('click', () => {
    const city = document.querySelector('input').value;
   
    if (city) {
        
    
        checkweather(city);
        

    } else {
        alert("Please enter a city name");
    }
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputt').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const city = document.querySelector('input').value;
            if (city) {
                checkweather(city);
            } else {
                alert("Please enter a city name");
            }
        }
    });
});

