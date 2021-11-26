//prompt package
const prompt = require('prompt-sync')();

const COUNT = prompt("Enter the number: ");

let sum = 0;

//find sum
for(let i = 0; i < COUNT; i++){
    let twoDigitNum = Math.floor((Math.random() * 90 ) + 10);
    sum += twoDigitNum;
}

console.log("Sum is: " +sum);

let avg = sum / COUNT;
console.log("Average is: " +avg);