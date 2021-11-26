const prompt = require('prompt-sync')();

//change inch to feet
function inchToFeet() {
    const NUMBER = prompt('Enter a number in inch: ');
    let numberInFeet = NUMBER / 12;

    console.log("Converted number in feet is: " +numberInFeet);
}

//change feet to meters
function feetToMeters() {
    const LENGTH = prompt('Enter the length in feet: ');
    let lengthInMeter = LENGTH / 3.8;

    const BREADTH = prompt('Enter the breadth in feet: ');
    let breadthInMeter = BREADTH / 3.8;

    console.log("Length and Breadth in meters are: " +lengthInMeter+ " and " +breadthInMeter);
}

//find area of rectangles
function area() {
    const LENGTH = prompt('Enter the length (feet): ');
    const BREADTH = prompt('Enter the breadth (feet): ');
    
    //area of plot in feet
    let calculateArea = LENGTH * BREADTH;
    console.log("Area of a plot in feet is: " + calculateArea);

    //area of plot in acres
    let calculateAreaInAcres = calculateArea / 43560;
    console.log("Area of a plot in acres is: " +calculateAreaInAcres);

    //area of 25 plot in acres
    let totalArea = calculateAreaInAcres * 25;
    console.log("Area of 25 such plots in acres is: " +totalArea);
}

//change inch to feet
inchToFeet();

//change feet to meter
feetToMeters();

//find area of plots
area();