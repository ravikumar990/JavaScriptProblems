const COUNT = 5;

const numberArray=[]; 

//append element in array
for ( let i = 0; i < COUNT; i++ ) {
    numberArray[i] = Math.floor(( Math.random() * 899 ) + 100);
}

console.log("Random numbers are: " +numberArray);

let maxNum = numberArray[0];
let minNum = numberArray[0];

//finding max and min from list
for ( i = 0; i < numberArray.length; i++) {
    if ( numberArray[i] > maxNum ) {
        maxNum = numberArray[i];
    }
    if ( numberArray[i] < minNum ) {
        minNum = numberArray[i];
    }
}

console.log("Maximum is : " +maxNum);
console.log("Minimum is : " +minNum);