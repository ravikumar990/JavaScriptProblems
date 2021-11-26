const prompt = require('prompt-sync')();

function checkPrime(number) {
    let flag = 0;

    for (i = 2; i <= (number / 2); i++) {
        if ((number % i) == 0) {
            flag = 1;
        }
    }

    //check number is prime or not
    if (flag == 0) {
        console.log(number + " is a prime number");
    }
    else {
        console.log(number + " is not a prime number");
    }
}


function checkPalindrome(number) {
    let reverse = 0;
    let remain = 0;
    let actualNumber = number;

    while (number > 0) {
        remain = (number % 10);
        reverse = (reverse * 10 + remain);
        number = Math.floor(number / 10);
    }

    if (reverse == actualNumber)
        console.log(actualNumber + " is a palindrome");
    else
        console.log(actualNumber + " is not a palindrome");
}

const NUMBER = prompt('Enter number: ');

console.log(checkPalindrome(NUMBER));
console.log(checkPrime(NUMBER));