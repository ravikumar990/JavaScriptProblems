const prompt = require('prompt-sync')();

const DIGIT = prompt("Enter the number for the unit conversion: ");
const NUMBER = prompt('Enter 1. Feet to Inch ' + '2. Feet to Meter ' + '3. Inch to Feet ' + '4. Meter to Feet option: ');

switch(Number(NUMBER)) {
    case 1: 
        let feetToInch = DIGIT * 12;
        console.log("Feet to Inch: " +feetToInch);
        break;
    case 2: 
        let feetToMeter = DIGIT / 3.281;
        console.log("Feet to Meter: " +feetToMeter);
        break;
    case 3: 
        let inchToFeet = DIGIT / 12;
        console.log("Inch to Feet: " + inchToFeet);
        break;
    case 4: 
        let meterToFeet = DIGIT * 3.281;
        console.log("Meter to Feet: " + meterToFeet);
        break;
    default:
        console.log("You have entered the wrong input.");
        break;
}