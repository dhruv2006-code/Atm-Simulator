// question no.2
let num = [10,20,30];
let sum = num.reduce(function(finalval,recieved){
    return finalval+recieved;
},0);
// question no.3
let largest = [8,15,2,90,35];
let large = largest[0];
for(let i = 0; i<largest.length; i++){
    if(largest[i]>large) {
      large = largest[i]
    }
}
console.log(large);
// question no.4
let small = [8,15,2,90,35];
let smallest = small[0];
for(let i = 0; i<small.length; i++){
    if(small[i] < smallest){
    smallest = small[i];
        console.log(small[i]);
    }
}
// question no.5
let randomNum = [1,2,4,5,6,7,8];
let count = 0;
for(let i = 0; i<randomNum.length; i++){
    if(randomNum[i] % 2 === 0) {
     count++;
    }
}
console.log(count);

// question no.6
let newrandomNum = [1,2,4,5,6,7,8];
let oddcount = 0;
for(let i = 0; i<newrandomNum.length; i++){
    if(newrandomNum[i] % 2 === 1) {
     oddcount++;
    }
}
console.log(oddcount);


//  ARRAYS METHOD QUESTIONS (ALL)
// push questions
// question 1
let ah = [10,20,30];
ah.push(40,50);
// question 2
let gr = ["html","css","react"]
gr.splice(2,0,"javascript");
// question 3
let empty = [];
empty.push(1,2,3,4,5);
// question 4
let we = [20,30,40];
we.unshift(5,10)
// question 5
let df = ["A","B","C","D"];
df.shift()
// question 6
let sd = [10,20,30,40,50];
sd[2] = 300;
// question 7
let et = [10,20,30,40,50];
let cv = et.slice(1,4);
// question 8
let yt = [100,50,10,80,20];
let ji = yt.sort(function(a,b){
    return a-b;
});
// question 9
let ui = ["Banana","Apple","Cat","Dog"];
ui.sort();
// question 10
let oi = [10,20,30,40];
oi.reverse();
// question 11
let multiple =  [1,2,3,4,5];
let final = multiple.map(function(newmultiple){
    return newmultiple*5;
})
// question 12
let yu = [10,15,20,25,30];
let jk = yu.filter(function(nh){
    return nh%2 === 0;
})
// question 13 
let ni = [5,15,25,35];
let ok = ni.some(function(ja){
   return ja>30;
})
// question 14
let op = [2,4,6,8,10];
let ew = op.every(function(he){
           return he;
   
})
// question 15
let lk = [10,20,30,40];
let [a,b] = lk;

// question 16
let oq = ["HTML","CSS","JS","React"];
let [elem1,...elem2] = oq;

// question 17
let ko = [1,2,3];
let ds = [4,5,6];
let pw = [...ko,...ds];
// question 18 
let as = [10,20,30];
let pq = [...as];
// question 19  
let arr = ["HTML","CSS","React"] ;
arr.pop()
arr.push("javasccript","react")
console.log(arr);

// question 20
let nums = [1,2,3,4,5,6,7,8,9,10];
let newnum = nums.filter(function(val){
    return val % 2 == 0;
})
let finalnum = newnum.map(function(newval){
    return newval*10;
})
console.log(finalnum);
// question 21
let reversenum = [5,10,15,20,25];
reversenum.reverse();
reversenum.shift();
console.log(reversenum);
// question 22
let hr = [100,200,300];
hr.push(400);
hr.unshift(50);
console.log(hr);
// question 23
let alpha = ["A","B","C","D","E"];
alpha.splice(1,3);
alpha.pop();
alpha.push("X","Y","E");
console.log(alpha);
// question 24
let checkEven = [11,22,33,44,55];
let ans = checkEven.every(function(checkval){
  if(checkval>10){
      return checkval;
  }
});
console.log(ans);
// question 25
let original = [10,20,30,40,50];
console.log(original)
let copy = [...original];
copy.reverse();
console.log(copy);