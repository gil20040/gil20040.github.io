//const alertURL ="https://api.openweathermap.org/data/2.5/onecall?lat=39.742043&lon=-104.991531&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"
const alertURL ="https://api.openweathermap.org/data/2.5/onecall?lat=33.98&lon=-112.89&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"
 
//test alerts with this url

//const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"

 fetch(alertURL)
.then(function (response) {
return response.json();
})
.then(function (wthObject) {
  console.log(wthObject);  // temporary checking for valid response and data parsing

 if (("alerts" in wthObject)==false) {
   alertsshow = "no"
 } else {
   alertsshow = "yes"
 }
  console.log(alertsshow);


 if (alertsshow = "yes") { 
    let card = document.createElement('section');

    let alerttype = document.createElement('p');
    let alertdesc = document.createElement('p');

    alerttype.textContent = '⚠️Alert Type:' + ' ' + wthObject.alerts[0].event;
    alertdesc.textContent = wthObject.alerts[0].description;    

    card.append(alerttype);
    card.append(alertdesc);
    console.log(alerttype);
    console.log(alertdesc);

    document.querySelector('#alerts').append(card);

    document.querySelector('#alerts').style.display = 'block';
  }

})