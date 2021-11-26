const prompt = require('prompt-sync')();

let count = 0;
let flag = 0;
let factorArray = [];
let number = prompt("Enter any number to get prime factors: ");

//checking for 0 and 1
if ( flag == 0 || flag == 1 ) {
    console.log("Invalid Input");
}

//calculating prime factors of given number
for ( i = 2; i <= number; i++ ) {
    let a = number % i;
    if ( a == 0) {
        flag = 1;
        for ( j = 2; j <= i / 2; j++) {
            let b = i % j;
            if ( b == 0) {
                flag = 0;
                break;
            }
        }
        if ( flag == 1 ) {
            factorArray [count] = i;
            count++;
        }
    }
}