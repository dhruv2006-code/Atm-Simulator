// 11. Ek <div> create karo, usmein class="box" aur id="randomBox" add karo, phir usse body mein add karo.
let btn = document.createElement('button');
btn.textContent = "delete";
btn.setAttribute("data-id","101")
document.querySelector('body').appendChild(btn)
console.log(btn.getAttribute('data-id'))
