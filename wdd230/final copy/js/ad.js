const requestURL = 'json/smallbiz.json';
  
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  // console.table(jsonObject);  // temporary checking for valid response and data parsing

  const allbiz = jsonObject['smallbizfood'];
  const mybizads = allbiz.filter(smallbizfood => smallbizfood.bizname == "Block Restaurant" || smallbizfood.bizname == "Good Move Cafe" || smallbizfood.bizname == "Cubby's");
  console.log(mybizads);

  for (let i = 0; i < mybizads.length; i++ ) {
  let card = document.createElement('section');

  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let a = document.createElement('a');
  
  h2.textContent = mybizads[i].bizname;
  img.setAttribute('src', mybizads[i].imageurl); 
  img.setAttribute('alt',mybizads[i].bizname);
  img.setAttribute('class','foodi')
  p.textContent = mybizads[i].phone;
  p2.textContent = mybizads[i].address;
  p3.textContent = mybizads[i].ad;
  a.setAttribute('href',mybizads[i].website);
  a.setAttribute('target','_blank');
  a.setAttribute('class','sitelinks');
  a.setAttribute('rel','noopener');
 

  card.appendChild(h2);
  card.appendChild(p3)
  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(a);
  a.appendChild(document.createTextNode("Web Site"));


  document.querySelector('div.ads').append(card);
  }
});
