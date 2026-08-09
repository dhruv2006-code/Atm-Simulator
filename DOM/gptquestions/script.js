let allBtn = document.querySelectorAll('button');

allBtn.forEach(function(elem){
    elem.addEventListener('click',function(){
          if(elem.innerHTML == 'add friend'){
              elem.innerHTML = 'remove'
    }
    else{
                elem.innerHTML = 'add friend'
    }
    })
  
})