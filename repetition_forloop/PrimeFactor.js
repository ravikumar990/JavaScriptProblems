const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter number: ');

for (i = 2; i <= NUMBER; i++) {
    if ((NUMBER % i) == 0) {
        let flag = 1;

        for (j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                flag = 0;
            }
        }

        if (flag == 1) {
            console.log(i);
        }
    }
}