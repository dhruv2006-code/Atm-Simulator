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