let box = document.querySelectorAll('.box')
let RandomIndex = Math.floor(Math.random()*box.length);
let Final = box[RandomIndex];
Final.addEventListener('click',function(){
let h2 = document.createElement('h2')

  document.querySelector('body').append(h2)
  h2.style.color = "white";
  h2.style.mixBlendMode = "Difference"
  h2.innerHTML = `Your Box Is ${RandomIndex}`
  console.log("lucky box")
}
)
