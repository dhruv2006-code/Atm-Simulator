let a = document.createElement('a');
a.setAttribute("href","https://sheryians.com");
a.setAttribute("target","_blank");
a.textContent = "link";
document.querySelector('body').appendChild(a);
// question 2
let img = document.querySelector('img');
img.removeAttribute('alt')
console.log(img)