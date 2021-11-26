const prompt = require('prompt-sync')();

let DATE = prompt('Enter the DATE: ');
let MONTH = prompt('Enter the MONTH: ');

let result = "false";

if ((MONTH <= 6) && (MONTH >= 3)) {
    let monthDay = 30 + (MONTH % 2);

    if((DATE >= 1) && (DATE <= monthDay)){
        let days = (MONTH*100) + DATE;

		if ((days >= 320) && (days <= 620)){
            result="true";
        }
	}
}

console.log(result);