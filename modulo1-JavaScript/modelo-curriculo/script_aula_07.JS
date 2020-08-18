/*
var title = document.querySelector('h1');
title.textContent = 'Teste mudança';

var city = document.querySelector('#city');
city.textContent = 'Belo Horizonte - MG';
*/

//personalDataArray = document.querySelectorAll('.data');
//personalDataArray = Array.from(personalDataArray);
var data = Array.from(document.querySelectorAll('.data'));
console.log(data);

for (var i = 0; i < data.length; i++) {
  var currentElement = data[i];
  currentElement.classList.add('.emphasis');
}
