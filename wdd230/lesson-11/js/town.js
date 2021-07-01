const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
 
    const towns = jsonObject['towns'];
    const mytowns = towns.filter(towns => towns.name == "Fish Haven" || towns.name == "Soda Springs" || towns.name == "Preston");
    //console.log(mytowns);

    for (let i = 0; i < mytowns.length; i++ ) {
        let card = document.createElement('section');

        let divd = document.createElement('div');
        divd.className = 'details';
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3')
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let divi = document.createElement('div');
        divi.className = 'cimg'
        let img = document.createElement('img');

        
        h2.textContent = mytowns[i].name;
        h3.textContent = mytowns[i].motto;
        p.textContent = 'Year Founded:' + ' ' + mytowns[i].yearFounded;
        p2.textContent = 'Population:' + ' ' + mytowns[i].currentPopulation;
        p3.textContent = 'Annual Rain Fall:' + ' ' + mytowns[i].averageRainfall + ' ' + 'in';
        img.setAttribute('src', `images/${mytowns[i].photo}`); 

        divd.append(h2);
        divd.append(h3);
        divd.append(p);
        divd.append(p2);
        divd.append(p3);

        divi.append(img);

        card.appendChild(divd);
        card.appendChild(divi);

        document.querySelector('div.towns').append(card);
    }

});
