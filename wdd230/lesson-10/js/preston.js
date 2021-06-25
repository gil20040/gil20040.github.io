const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"; 

        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            
            document.getElementById('current-desc').textContent = jsObject.weather[0].description;   
            document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);   
            document.getElementById('current-humidity').textContent = jsObject.main.humidity;
            document.getElementById('current-windspeed').textContent = Math.round(jsObject.wind.speed);
            document.getElementById('current-windchill').textContent = windChill(jsObject.main.temp,jsObject.wind.speed);
        });