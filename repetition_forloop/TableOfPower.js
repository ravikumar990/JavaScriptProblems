const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');

for (i = 0; i <= NUMBER; i++) {
    let powerOfTwo = Math.pow(2, i)
    console.log(powerOfTwo);
}