const prompt = require('prompt-sync')();

const NUMBER = prompt('Enter a number between 1-7: ');

if ( NUMBER == 1 ) {
    console.log("Sunday");
}
else if ( NUMBER == 2 ) {
    console.log("Monday");
}
else if ( NUMBER == 3 ) {
    console.log("Tuesday");
}
else if ( NUMBER == 4 ) {
    console.log("Wednesday");
}
else if ( NUMBER == 5 ) {
    console.log("Thursday");
}
else if ( NUMBER == 6 ) {
    console.log("Friday");
}
else if ( NUMBER == 7 ) {
    console.log("Saturday");
}
else {
    console.log("You have entered wrong number.");
}