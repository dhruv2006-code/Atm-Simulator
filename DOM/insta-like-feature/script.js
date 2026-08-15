
let img = document.querySelector('img');
img.addEventListener('dblclick',function(){
let heart = document.querySelector('i');
heart.style.opacity = 1;
setTimeout(() => {
    heart.style.opacity = 0;
}, 1000);
})