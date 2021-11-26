const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');
let sum = 0;

//calculate sum of series
for (i = 1; i <= NUMBER; i++) {
    sum += 1 / i;
}
console.log("Harmonic Value for the series is: " + sum);