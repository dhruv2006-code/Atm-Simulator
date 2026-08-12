let div = document.querySelector('#container');
let h1 = document.createElement('h1');
h1.textContent = "hii this is an h1";
let p = document.createElement('p');
p.textContent = "hii this is an p";
div.appendChild(h1)
div.prepend(p);
// question 2
let random = Math.floor(Math.random()*101);
const newdiv = document.createElement('div');
newdiv.innerHTML = random;
document.querySelector('body').appendChild(newdiv);
// question 3
const div2 = document.querySelectorAll('#box');
let randomBox = Math.floor(Math.random()*div2.length);  
let finalVal = div2[randomBox];
const h2 = document.createElement('h2');
h2.innerHTML = "Lucky Box!";
finalVal.append(h2);
document.querySelector('body').append(finalVal);

