let sayHello = () => {
    console.log("hello javascript");
}
sayHello();
let add = (a,b) => {
    return a+b;
}
let ans = (add(12,58));
console.log(ans)

let greet = (name = "Guest") => {
    console.log(`Hii ${name}`)
}
greet("dhruv");

let sum = 0;
let unlimited = (...val) => {
  for(let i = 0; i<val.length; i++){
    sum = sum + val[i];
  }
}
unlimited(201,21);
console.log(sum);

(function (){
  console.log("I run instantly");
})();

let Higher = () => {
  let hii = "This is H.O.F question"

    function innner (){
      console.log(hii);
    }
    innner()
}
Higher();

let fruits = ["apple","mango","guava","pinapple", "lichi"];
fruits.push("watermelon");
fruits.shift();

let arr = [23,"dhruv","narayandhruv@gmail.com"];
for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);
}

let obj = {
  name: "nitin",
  age: 20,
  city: "delhi",
}
for(let key in obj){
  console.log(`${key} : ${obj[key]}`)
}

let obj2 = {
      fnc : setTimeout(function(){
        console.log("time's up")
      },2000)
}

let higher = function(newfnc){
      newfnc();
      newfnc();
}
higher(function(){
  console.log("this is H.O.F second question")
})

let pure = function(a,b){
      console.log(a+b);
}
pure(21,98);
pure(21,98);
let counter = 0;
let impure = function(){
  counter++;
  console.log(counter)
}
impure();
impure();

let destruct = function ({name,age}){
  console.log(name,age)
}
destruct({name: "arthav", age: "86"});

