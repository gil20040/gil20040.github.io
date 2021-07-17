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
  let card2 = document.createElement('section');

  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  let h3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');
  
  h2.textContent = foodbiz[i].bizname;
  img.setAttribute('src', foodbiz[i].imageurl); 
  img.setAttribute('alt',foodbiz[i].bizname);
  p.textContent = foodbiz[i].phone;
  p2.textContent = foodbiz[i].address;
  p3.textContent = foodbiz[i].website;

  h3.textContent = foodbiz[i].bizname;
  p4.textContent = foodbiz[i].phone;
  p5.textContent = foodbiz[i].address;
  p6.textContent = foodbiz[i].website;
 

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);

  card2.appendChild(h3)
  card2.appendChild(p4);
  card2.appendChild(p5);
  card2.appendChild(p6);


  document.querySelector('div.food').append(card);

  document.querySelector('div.foodlist').append(card2);
  }
});
