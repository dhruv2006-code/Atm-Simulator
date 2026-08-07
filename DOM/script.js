let h2 = document.querySelector('h2');
let inc = document.getElementById('inc')
let dec = document.getElementById('dec')
let reset = document.getElementById('reset')
h2.style.color = "pink";
h2.style.fontSize = "100px";
inc.style.backgroundColor = "green";
dec.style.backgroundColor = "red";
reset.style.backgroundColor = "grey";
let val = 0;
reset.addEventListener("click", function(){
   val = 0;
    h2.innerHTML = val;
})
inc.addEventListener("click", function(){
    val++;
      h2.innerHTML = val;
})
dec.addEventListener("click", function(){
    val--;
      h2.innerHTML = val;
})