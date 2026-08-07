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

let testing = {
  name:"arya",
  fnc: function(){
    console.log(this);
  }
}

testing.fnc();

let num = [21,324,32,54,21];
let numans = num.map(function(numval){
    return numval*numval
});

console.log(numans);

let findeven = [12,23,444,43,12,43,65,8888];
let evenans = findeven.filter(function(findval){
  return findval%2 === 0;
})
console.log(evenans);

let salary = [10000,20000,30000];
let total = salary.reduce(function(acc,mainsal){
  return acc+mainsal;
})
console.log(total);
let newarr = ["dhruv","avinash","azeem","adi"];
let finalname = newarr.every(function(names){
    if(newarr.length>3){
      return names
    }
})
console.log(finalname);

let user = {
  name:"avinash",
  age:16,
}
Object.freeze(user);
user.city = "bhopal";
user.age = 32;

let nst = {
  name:"dhruv",
  age:32,
  address:{
    city:"new Delhi"
  }
}
let {city} = nst.address