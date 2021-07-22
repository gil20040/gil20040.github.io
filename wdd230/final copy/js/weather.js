const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"

fetch(forecastURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
 //  console.log(jsonObject);  // temporary checking for valid response and data parsing

  document.getElementById('current-desc').textContent = jsonObject.current.weather[0].description;   
  document.getElementById('current-temp').textContent = Math.round(jsonObject.current.temp);   
  document.getElementById('current-humidity').textContent = jsonObject.current.humidity;
  
})
fetch(forecastURL)
.then(function (response) {
return response.json();
})
.then(function (jsObject) {       

  for (let i = 1; i < 4; i++ ) {
     let card = document.createElement('section');
     let top = document.createElement('p');
     let mid = document.createElement('p');
     let bot = document.createElement('p');


     var d = new Date(jsObject.daily[i].dt*1000);
     let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     let monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     var month = monthlist[d.getMonth()];
     var date = (d.getDate());
     var day = daylist[d.getDay()];
     var daytemp = Math.round(jsObject.daily[i].temp.day) + '° F';
     top.textContent = month + ' ' + date
     mid.textContent = day
     bot.textContent = daytemp

     card.append(top);
     card.append(mid);
     card.append(bot);

     document.querySelector('#threedayweather').append(card);

    }
  });
