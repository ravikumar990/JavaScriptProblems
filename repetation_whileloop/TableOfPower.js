const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');

let i = 0
while (i <= NUMBER) {
    let powerOfTwo = Math.pow(2, i);
    if (powerOfTwo <= 256) {
        console.log(powerOfTwo);
        i++;
    }
    else {
        break;
    }
}