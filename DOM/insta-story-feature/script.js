let stories = document.querySelector('.stories');
let innerStory = document.querySelector('.story');
let Multi = [
    {
        dp:"https://i.pinimg.com/736x/23/d0/00/23d00057206171d14e3a6f0d5a103c61.jpg",
        story:"https://i.pinimg.com/1200x/fb/fe/0f/fbfe0f625533b3fe92ad110b813578f1.jpg"
    },
     {
        dp:"https://i.pinimg.com/1200x/c4/2b/1c/c42b1cf16d7171b710f8b0f6bbfed505.jpg",
        story:"https://i.pinimg.com/1200x/c4/2b/1c/c42b1cf16d7171b710f8b0f6bbfed505.jpg"
    },
     {
        dp:"https://i.pinimg.com/736x/12/2e/0e/122e0e2adb6893b11a0145f6e36f4678.jpg",
        story:"https://i.pinimg.com/736x/ba/c1/5d/bac15d9d2f90cbc03ce3385851701a48.jpg"
    },
     {
        dp:"https://i.pinimg.com/1200x/aa/16/74/aa16749d358f085aacc6d833d72bbc4e.jpg",
        story:"https://i.pinimg.com/1200x/46/5a/13/465a138a50d168bb1c4a96c3e0f12388.jpg"
    },
     {
        dp:"https://i.pinimg.com/1200x/ed/21/28/ed2128735a36b9dd959e149485386772.jpg",
        story:"https://i.pinimg.com/1200x/de/f3/33/def33366f2786491d90c5221c473898a.jpg"
    },
     {
        dp:"https://i.pinimg.com/736x/84/83/2e/84832e7d3776035177c0daeb8af89e40.jpg",
        story:"https://i.pinimg.com/1200x/87/4d/69/874d6943bdf3fb496bb95d3de9a41cf5.jpg"
    },
]
let StoryCreate = "";
Multi.forEach(function(elem,index){
    StoryCreate = StoryCreate + ` <div class="story">
                <img id="${index}" src="${elem.dp}" alt="">
            </div>`
})
stories.innerHTML = StoryCreate;

stories.addEventListener('click',function(details){
    let full = document.querySelector('.full-screen');
    full.style.display = "block";
    full.style.backgroundImage = `url(${Multi[details.target.id].story})`
    setTimeout(() => {
         full.style.display = "none";
    }, 2000);
      
})