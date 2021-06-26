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

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial";

        fetch(forecastURL)
         .then(function (response) {
         return response.json();
         })
         .then(function (jsObject) {

        
         const filtered = jsObject.list.filter(a => a.dt_txt.includes(`18:00:00`));
         console.table(filtered);

         for (let i = 0; i < filtered.length; i++ ) {
            let card = document.createElement('section');
            let top = document.createElement('h3');
            let mid = document.createElement('img');
            let bot = document.createElement('p');
    
            const imagesrc = 'https://openweathermap.org/img/w/' + filtered[i].weather[0].icon + '.png'; 
            const milliseconds = filtered[i].dt * 1000;
            const dateObject = new Date(milliseconds);
            const humanDateFormat = dateObject.toLocaleString();
            const final = dateObject.toLocaleString("en-US", {weekday: "short"});

            top.textContent = final;
            mid.setAttribute('src', imagesrc);
            bot.textContent = Math.round(filtered[i].main.temp) + '° F';

    
            card.append(top);
            card.append(mid);
            card.append(bot);
    
            document.querySelector('div.forecast').append(card);
        }
    

        });
