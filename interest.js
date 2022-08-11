function countBalance(balance, interest, time){
    let total = balance * ( 1 + (interest * time));
    return total;
}
let myBalance = 1000;
let myInterest = 5;
let time = 5;
let myTotalBalance = countBalance(myBalance, myInterest, time);
console.log('my new balance: ', myTotalBalance);