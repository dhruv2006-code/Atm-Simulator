let box = document.querySelector('.box');
box.addEventListener('mouseenter',function(){
  console.log("Mouse Entered");
  
})
box.addEventListener('mouseleave',function(){
  console.log("Mouse left");
  
})
box.addEventListener('mousemove',function(dets){
  console.log(`${dets}`);
})