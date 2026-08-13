let btn = document.querySelector('button');
let progress = document.querySelector('.inner');
let h2 = document.querySelector('h2');
let Newtime = document.createElement('h1');
let box = document.querySelector('.box');
let val = 0;
btn.addEventListener('click',function(){
    let time = 50 + Math.floor(Math.random()*50);
    btn.style.pointerEvents = 'none';
    btn.style.backgroundColor = "grey";
          Newtime.innerHTML = `your video is downloaded in ${time/10} Seconds`;
        Newtime.style.color = "red";
           box.appendChild(Newtime);
   let timing = setInterval(function(){
        val++;
        h2.innerHTML = val+'%';
        progress.style.width = val+'%'
  
    },time)
    setTimeout(() => {
        clearInterval(timing);
        console.log("congrats video is downloaded");
     
    }, time*100);
})
// progress bar 2
let btn2 = document.querySelector('.btn2');
let progress2 = document.querySelector('.inner2');
let newh2 = document.querySelector('#newh2');
let box2 = document.querySelector('.box2');
let val2 = 0;
btn2.addEventListener('click',function(){
    const time2 = 3+ Math.floor(Math.random()*8);
    btn2.style.pointerEvents = 'none';
    btn2.style.backgroundColor = 'red';
    let timing2 = setInterval(() => {
        val2++;
        newh2.innerHTML = val2;
        progress2.style.width = val2+'%';
    }, time2);
    setTimeout(() => {
        clearInterval(timing2);
        btn2.textContent = "File Uploaded";
    }, time2*100);
});