//defined empty array
const arrayNum = [];

//store element in array
for ( let i=0; i < 10; i++ ) {
    arrayNum[i] = Math.floor ( Math.random() * 899) + 100;
}

console.log("Array is: [" +arrayNum+ "]");

//defining variable
let maxVal = arrayNum[0];
let minVal = arrayNum[0];
let secondMax = 0;
let secondMin = 0;

for (i = 0; i < arrayNum.length; i++) {

    //checking for second maximum value
    if ( arrayNum[i] > maxVal ) {
        secondMax = maxVal;
        maxVal = arrayNum[i];
    }
    else if ( arrayNum[i] > secondMax && arrayNum[i] != maxVal ) {
        secondMax = arrayNum[i];
    }

    //checking for second minimum value
    if ( arrayNum[i] < minVal ) {
        secondMin = minVal;
        minVal = arrayNum[i];
    }
    else if ( arrayNum[i] < secondMin && arrayNum[i] != minVal ) {
        secondMin = arrayNum[i];
    }
}

console.log("Second Maximum value is: " +secondMax);
console.log("Second Minimum value is: " +secondMin);