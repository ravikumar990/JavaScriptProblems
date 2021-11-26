const prompt = require('prompt-sync')();

//taking user input
const year = prompt('Enter year (YYYY): ');

//checking year is leap year or not
if ( ( ( year % 4 == 0 ) && ( year % 100 != 0 ) ) || ( year % 400 == 0 ) ) {
    console.log(year +" is a leap year");
}
else {
    console.log(year +" is a not leap year");
}
