const requestURL = 'json/smallbiz.json';
  
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing

  const foodbiz = jsonObject['smallbizfood'];
  //const mytowns = towns.filter(towns => towns.name == "Fish Haven" || towns.name == "Soda Springs" || towns.name == "Preston");
  console.log(foodbiz);

  for (let i = 0; i < foodbiz.length; i++ ) {
  let card = document.createElement('section');

  let h2 = document.createElement('h2');
  let i = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  
  h2.textContent = foodbiz[i].bizname;
  p.textContent =  foodbiz[i].phone;
  p.textContent =  foodbiz[i].address;
  p.textContent =  foodbiz[i].website;
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

});