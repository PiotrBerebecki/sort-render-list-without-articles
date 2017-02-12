'use strict';

console.clear();

// Original array
var bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Clean the string
var removeArticle = function removeArticle(name) {
  return name.replace(/(The|A|An)\s/i, '');
};

// Sort the original array
bands.sort(function (a, b) {
  return removeArticle(a) < removeArticle(b) ? -1 : 1;
});

// Render in DOM
var listDOM = document.getElementById('bands');

bands.forEach(function (band) {
  var itemDOM = document.createElement('li');
  itemDOM.textContent = band;
  listDOM.appendChild(itemDOM);
});