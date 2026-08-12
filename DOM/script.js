let a = document.createElement('a');
a.setAttribute("href","https://sheryians.com");
a.setAttribute("target","_blank");
a.textContent = "link";
document.querySelector('body').appendChild(a);
// question 2
let img = document.querySelector('img');
img.removeAttribute('alt')
console.log(img)
// question 3
let box = document.querySelector(".box");
let p = document.createElement("p");
p.innerHTML = "new Paragraph";
p.style.color = "red"
box.appendChild(p);