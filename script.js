const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetail = document.querySelector('.weather-details');

// const error = document.querySelector('.not-found')


search.addEventListener('click', () => {
    const APIKey = '75ee5b0fc5de178cab1614d267a59d27';
    const city = document.querySelector('.search-box input').value;

    if(city == ''){
        return;
    }
        
    
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(data => {



        const images = document.querySelector('.weather-box img');
        
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        
        switch (data.weather[0].main) {
            case 'Clear':
                images.src = './image/clear.png'
                break;
            
            case 'Rain':
                images.src = './image/rain.png'
                break;

            case 'Snow':
                images.src = './image/snow.png'
                break;

            case 'Clouds':
                images.src = './image/cloudd.png'
                break;

            case 'Mist':
                images.src = './image/mist.png'
                break;
            
            case 'Haze':
                images.src = './image/mist.png'
                break;
            default:
                images.src = './image/cloudd.png';

        };

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Kw/h`
    });
});








