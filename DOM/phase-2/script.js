let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');
let files = [
    "video.mp4",
    "movie.mp4",
    "tutorial.mp4",
    "course.mp4"
]
let val = 0;
btn.addEventListener('click',function(){
    btn.style.pointerEvents ='none';
    btn.style.backgroundColor = 'yellow'
    btn.style.color = 'black'
let RandomFile = Math.floor(Math.random()*files.length);
RandomFile = files[RandomFile];
let randomSize = 100 + Math.floor(Math.random()*1000);
btn.innerHTML = `downloading ${RandomFile}`
h1.innerHTML = `File Size : ${randomSize}MB`
let time = 50 + Math.floor(Math.random()*99)
let int = setInterval(() => {
    val++;
   h2.textContent = val + "%"
    if(val == 100){
        h2.innerHTML = "Download Complete🎉";
    }
}, time);
setTimeout(() => {
    clearInterval(int)
}, time*100);
})

