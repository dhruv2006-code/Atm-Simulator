// question 3 - random paper art maker

let main = document.querySelector('main');
let Btn = document.querySelector('button');
Btn.addEventListener('click',function(){
    let box = document.createElement('div');
let c1 = Math.floor(Math.random()*256);
let c2 = Math.floor(Math.random()*256);
let c3 = Math.floor(Math.random()*256);
let rot = Math.floor(Math.random()*361);
let x = Math.floor(Math.random()*100);
let y = Math.floor(Math.random()*100);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.rotate = rot+"deg";
    box.style.position = "absolute";
    box.style.top = x+"%";
    box.style.left = y+"%";

    main.appendChild(box)
})