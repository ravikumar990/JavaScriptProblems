const prompt = require('prompt-sync')();

function palindrome(number) {
    let reverse = 0;
    let remain = 0;
    let actualNumber = number;

    while (number > 0) {
        remain = (number % 10);
        reverse = (reverse * 10 + remain);
        number = Math.floor(number / 10);
    }

    if (reverse == actualNumber)
        console.log("Number is a palindrome");
    else
        console.log("Number is not a palindrome");
}

const NUMBER = prompt('Enter number: ');

let result = palindrome(NUMBER);
console.log(result);