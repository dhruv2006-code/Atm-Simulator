let h1 = document.querySelectorAll('h1');
let randomH1 = Math.floor(Math.random()*h1.length);
console.log(randomH1)
// question 15
let teams = ["CSK", "MI", "RCB", "KKR"];
let RandomTeams = Math.floor(Math.random()*teams.length);
let randomIndex = teams[RandomTeams];
console.log(randomIndex);

// question 16
let cards = document.querySelectorAll(".card");
let randomCards = Math.floor(Math.random()*cards.length);
let CardsIndex = cards[randomCards];
console.log(randomCards);

// question 17
let heading = document.querySelector("#heading");
console.log(heading)
// question 18
let p = document.querySelectorAll("p");
console.log(p)