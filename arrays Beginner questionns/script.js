// question no.1 
let arr = [10,20,30,40];
let newarr = (val) => {
    console.log(val)
}
newarr(arr);
// question no.2
let num = [10,20,30];
let sum = num.reduce(function(finalval,recieved){
    return finalval+recieved;
},0);
// question no.3
let largest = [8,15,2,90,35];
let finallargest = largest.filter(function(Lnum){
    return Lnum>35;
})
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
    if(newrandomNum[i] % 2 === 0) {
     oddcount++;
    }
}
console.log(oddcount);


//  ARRAYS METHOD QUESTIONS (ALL)
