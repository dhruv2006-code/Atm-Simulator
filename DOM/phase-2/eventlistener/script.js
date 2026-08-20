let people = [
    {
        fullname: "Gojo Satoru",
        work: "Frontend Developer",
        laptop: "MacBook Pro",
        company: "Google",
        image: "https://i.pinimg.com/736x/fe/fd/e7/fefde78e9dba9824349ac99c96d1391e.jpg"
    },
    {
        fullname: "Levi Ackerman",
        work: "Backend Developer",
        laptop: "Dell XPS 15",
        company: "Microsoft",
        image: "https://i.pinimg.com/736x/8d/c6/fd/8dc6fd1e4d41236f81708ec5ae4f78d1.jpg"
    },
    {
        fullname: "Itachi Uchiha",
        work: "Software Engineer",
        laptop: "Lenovo ThinkPad",
        company: "Amazon",
        image: "https://i.pinimg.com/736x/d1/6d/3e/d16d3e188a01b4659abf794de6f0861a.jpg"
    },
    {
        fullname: "Mikasa Ackerman",
        work: "UI/UX Designer",
        laptop: "MacBook Air M2",
        company: "Adobe",
        image: "https://i.pinimg.com/736x/10/df/e3/10dfe34514273608a93284ab85e6cad9.jpg"
    }
];
let main = document.querySelector('main');
let cardPrint = "";
people.forEach(function(card){
  cardPrint = cardPrint + ` <div class="card">
            <img src="${card.image}" alt="">
            <h1>${card.fullname}</h1>
            <h5>${card.laptop}</h5>
            <button>${card.company}</button>
        </div>`
  
})
main.innerHTML = cardPrint;

