const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    const mytowns = towns.filter(towns => towns.name == "Preston");
    

    let divd = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    h2.textContent = mytowns[0].name + ' ' + 'Events' +' '+ '📅';
    p.textContent = mytowns[0].events[1];
    p2.textContent = mytowns[0].events[2];
    p3.textContent = mytowns[0].events[0];

    divd.append(h2);
    divd.append(p);
    divd.append(p2);
    divd.append(p3);

    document.querySelector('div.events').append(divd);
  
  });
  