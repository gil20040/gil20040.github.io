const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&appid=0ca82fb87bacbf2e586fa24d94b111c9&units=imperial"

 fetch(alertURL)
.then(function (response) {
return response.json();
})
.then(function (wthObject) {

if (("alerts" in wthObject)!==false) {
    getalerts();
}

function getalerts(){
  for (let i = 0; i < wthObject.alerts.length; i++ ) {

    let card = document.createElement('section');

    let alerttype = document.createElement('p');
    let alertdesc = document.createElement('p');

    alerttype.textContent = '⚠️Alert Type:' + ' ' + wthObject.alerts[i].event;
    alertdesc.textContent = wthObject.alerts[i].description;    

    card.append(alerttype);
    card.append(alertdesc);

    document.querySelector('#alerts').append(card);

    document.querySelector('#alerts').style.display = 'block';
  }
}

})