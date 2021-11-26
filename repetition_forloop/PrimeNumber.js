const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');
let flag = 0;

for (i = 2; i <= (NUMBER / 2); i++) {
    if ((NUMBER % i) == 0) {
        flag = 1;
    }
}

//check number is prime or not
if (flag == 0) {
    console.log(NUMBER + " is a prime number");
}
else {
    console.log(NUMBER + " is not a prime number");
}