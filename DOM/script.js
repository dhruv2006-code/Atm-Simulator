let btn = document.querySelector("button");
let box = document.querySelector("#box");
let body = document.querySelector("body");
let teams = [
  {
    team: "CSk",
    captian:"dhoni",
        primary:"yellow",
        img: "https://imgs.search.brave.com/9e86w0c7ennDXzLKFYinRMSNF-iSQvXZ6p120hFoh4Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMxMTY0/NDQuanBn"
  } , {
    team: "rcb",
    captian:"virat kohli",
        primary:"green",
                img: "https://imgs.search.brave.com/dRq90l7D8_Wpq3tyQ66aBkNw-maRpKpb9gx3_VnzycM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcmNi/LXRlYW0tcGxheWVy/cy1jb2xsYWdlLWVt/aTFocWJvc2RoNWgz/bjkuanBn"

  } , {
    team: "kkr",
    captian:"no idea",
    primary:"red",
     img: "https://imgs.search.brave.com/snBSpM5bd1h-_Ujko2l5yFktK5vknDbI59aLbYuvUrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaXg1/c2l4LmluL2Nkbi9z/aG9wL2ZpbGVzL0tL/Ui1SdWdieS1Qb2xv/LTA0LmpwZz92PTE3/NzgwNjc5NTkmd2lk/dGg9NzAw"

  }
]

btn.addEventListener("click",function(){
  let hii = Math.floor(Math.random()*teams.length);
  box.style.backgroundImage = `url("${teams[hii].img}")`;
  box.innerHTML = `${teams[hii].team}`
})
// question 2
let h1 = document.createElement('h1');
h1.innerHTML = "Hello Dom"
document.querySelector('main').appendChild(h1);
// question 3
let p = document.createElement('p')
p.innerHTML = "Learning Javascript";
document.querySelector("#container").prepend(p);
// question 4
let Btn = document.createElement('button');
Btn.innerHTML = "Click me";
document.querySelector('body').appendChild(Btn);
Btn.style.backgroundColor = "black";
Btn.style.color = "red";
// question 5
let h2 = document.createElement('h2');
document.querySelector("#container").appendChild(h2)
h2.innerHTML = "hii somebody"
// question 6
let li = document.createElement("li");
li.innerHTML = "javascript";
document.querySelector("ul").appendChild(li);

