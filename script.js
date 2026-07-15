 let pin = +prompt("pin batao");
   if(pin === 1234){
    let choice = +prompt(`
    ===ATM simulator=====
    1.check balance
    2.deposit
    3.withdraw
    4.exit`);
  let attempts = 0;
    let balance = 5000;
    let withdraw;
switch(choice){
    case 1:
        console.log("check balance");
        console.log(`your current balance is = ${balance}`);
        break;
    case 2:
         console.log("deposit");
        let deposit = +prompt("Enter the deposit amount");
        balance = balance + deposit;
        console.log(`after the deposit your current balance is = ${balance}`);
         break;
    case 3:
        console.log("withdraw");
    while(attempts < 3){
    withdraw = +prompt("enter the amount") 
    if(withdraw<=0) {
        console.log("Invalid Amount");
        attempts++
    } 
        else if(withdraw>balance){ console.log("Insufficient Balance"); attempts++}
       
        else if(withdraw<=balance){
    balance = balance - withdraw;
    break;
}

}
if(attempts === 3){
    console.log("card blocked")
}
console.log(`your current balance is = ${balance} `);
        break;
    case 4:
  console.log("thanks you")
         break;
    default:
        console.log("invalid choice");
        break;
}
 
}
  else {
    console.error("You Entered wrong pin");
  }
