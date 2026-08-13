let box = document.querySelector('.box');
let outer = document.querySelector('.outer')
let inner = document.querySelector('.inner')
let bottom = document.querySelector('.bottom')
let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let messages = ["Downloading...","Fetching files...","Almost there...","Processing...","Finalizing..."]
let val = 0;
btn.addEventListener('click',function(){
    let msgIndex = 0;
    let time = 30 + Math.floor(Math.random()*100);
    btn.style.pointerEvents = 'none';
    let int = setInterval(function(){
        val++;
      if (val == 100) {
    h3.innerHTML = "Download Complete";
    h3.style.color = "green";
} else if (val % 20 == 0) {
    h3.innerHTML = messages[msgIndex];
    msgIndex++;
}
        h2.innerHTML = val;
        outer.style.width = val+'%'
       
    },time)
    setTimeout(() => {
        clearInterval(int);
        
    }, time*100);
    
})