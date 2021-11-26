let month = new Map();
let count = 1;
let totalBirthdates = 50;

while ( count <= totalBirthdates ) {
    let birth_month = Math.floor(( Math.random() * 12 ) + 1);

    if ( birth_month == 1 ) {
        month.set(count, "January");
    }
    else if ( birth_month == 2 ) {
        month.set(count, "February");
    }
    else if ( birth_month == 3 ) {
        month.set(count, "March");
    }
    else if ( birth_month == 4 ) {
        month.set(count, "April");
    }
    else if ( birth_month == 5 ) {
        month.set(count, "May");
    }
    else if ( birth_month == 6 ) {
        month.set(count, "June");
    }
    else if ( birth_month == 7 ) {
        month.set(count, "July");
    }
    else if ( birth_month == 8 ) {
        month.set(count, "August");
    }
    else if ( birth_month == 9 ) {
        month.set(count, "September");
    }
    else if ( birth_month == 10 ) {
        month.set(count, "October");
    }
    else if ( birth_month == 11 ) {
        month.set(count, "November");
    }
    else if ( birth_month == 12 ) {
        month.set(count, "December");
    }
    count++;
}

console.log("Displaying the birth month of 50 individuals");
console.log(month);


function getByValue(month, monthValue) {
    let individualList = [];
    i = 0;
    for (let [key, value] of month.entries()) {
      if (value === monthValue) {
        individualList[i] = key;
        i++;
      }
    }
    console.log(individualList);
}

console.log("Displaying only the key values of a specific month");
getByValue(month, 'January');