//empty object
const dice = {};
const dieRoll = 10;

//dice number 
let one=1;
let two=1;
let three=1;
let four=1;
let five=1;
let six=1;

let key=0;

//assigning key and values to the dice object
while ((one < dieRoll) && (two < dieRoll) && (three < dieRoll) && (four < dieRoll) && (five < dieRoll) && (six < dieRoll)){
	let value = Math.floor((Math.random() * 6) + 1);
	dice[key] = value;

    switch(value){
        case 1:
			console.log(value +" "+ one);
			one++;
            break;
        case 2:
			console.log(value +" "+ two);
			two++;
            break;
		case 3:
			console.log(value +" "+ three);
			three++;
            break;
		case 4:
			console.log(value +" "+ four);
			four++;
            break;
		case 5:
			console.log(value +" "+ five);
			five++;
            break;
		case 6:
			console.log(value +" "+ six);
			six++;
            break;
    }
	key++;
}

console.log(one,two,three,four,five,six);

//check for maximum
if ( one == dieRoll ) {
    console.log ("1 has maximum count.");
}
else if( two == dieRoll ) {
    console.log ("2 has maximum count.");
}
else if( three == dieRoll ) {
    console.log ("3 has maximum count.");
}
else if( four == dieRoll ) {
    console.log ("4 has maximum count.");
}
else if( five == dieRoll ) {
    console.log ("5 has maximum count.");
}
else if( six == dieRoll ) {
    console.log ("6 has maximum count.");
}

//check for minimum
if ( (one < two) && (one < three) && (one < four) && (one < five) && (one < six) ) {
    console.log ("1 has minimum count.");
}
else if( (two < one) && (two < three) && (two < four) && (two < five) && (two < six) ) {
    console.log ("2 has minimum count.");
}
else if( (three < one) && (three < two) && (three < four) && (three < five) && (three < six) ) {
    console.log ("3 has minimum count.");
}
else if( (four < one) && (four < two) && (four < three) && (four < five) && (four < six) ) {
    console.log ("4 has minimum count.");
}
else if( (five < one) && (five < two) && (five < three) && (five < four) && (five < six) ) {
    console.log ("5 has minimum count.");
}
else if( (six < one) && (six < three) && (six < four) && (six < five) && (six < two) ) {
    console.log ("6 has minimum count.");
}