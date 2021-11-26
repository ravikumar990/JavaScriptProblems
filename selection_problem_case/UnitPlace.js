const prompt = require('prompt-sync')();

 const NUMBER = prompt('Enter a number: ');
 
 switch(Number(NUMBER)) {
     case 1:
         console.log("Units");
         break;
     case 10:
         console.log("Tens");
         break;
     case 100:
         console.log("Hundreds");
         break;
     case 1000:
         console.log("Thousands");
         break;
     case 10000:
         console.log("Ten thousands");
         break;
     case 100000:
         console.log("Lakh");
         break;
     default:
         console.log("Invalid input.");
         break;
 }