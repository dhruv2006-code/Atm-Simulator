let body = document.querySelector('body')
let big = document.querySelector('.big')
body.addEventListener('mousemove',function(details){
    big.style.top = details.y + "px"
    big.style.left = details.x + "px"
})
