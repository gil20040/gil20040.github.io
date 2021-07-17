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
  let card2 = document.createElement('section');

  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let h3 = document.createElement('p');
  

  p.textContent = foodbiz[i].phone;
  p2.textContent = foodbiz[i].address;
  p3.textContent = foodbiz[i].website;
  h3.textContent = foodbiz[i].bizname;
 

  card2.appendChild(h3);
  card2.appendChild(p);
  card2.appendChild(p2);
  card2.appendChild(p3);

  document.querySelector('div.food').append(card2);
  }
});