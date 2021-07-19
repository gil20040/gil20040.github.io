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
  let img = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let a = document.createElement('a');
  
  h2.textContent = foodbiz[i].bizname;
  img.setAttribute('src', foodbiz[i].imageurl); 
  img.setAttribute('alt',foodbiz[i].bizname);
  img.setAttribute('class','foodi')
  p.textContent = foodbiz[i].phone;
  p2.textContent = foodbiz[i].address;
  p3.textContent = foodbiz[i].website;
  a.setAttribute('href',foodbiz[i].website);
  a.setAttribute('target','_blank');
  a.setAttribute('class','sitelinks');
  a.setAttribute('rel','noopener');
 

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(a);
  a.appendChild(document.createTextNode("Web Site"));


  document.querySelector('div.food').append(card);
  }
});
