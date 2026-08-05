let obj = {
    name:"dhruv",
    age: 34,
    socials:{
        instagram:"the_backbenchers_school1",
        Youtube:"Backbenchersschool1"
    }
}
let aa = "age";
console.log(obj[aa]);

let obj2 = {
    address : "L-1s 1781-C/6",
    Nearby : "asthal temple",
}
for(let parmanent in obj2){
    console.log(`${parmanent} :${obj2[parmanent]}`);
}

let newobj = {
    name : "arya",
    class: "9th",
    section: "C",

    callingfunction() {

        setTimeout(function(){
            console.log(newobj);
        },3000)
    }
}
newobj.callingfunction();