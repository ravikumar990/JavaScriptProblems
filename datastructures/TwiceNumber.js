const arrayNum=[];
let index = 0;

//loop continues till i=99
for (let i=1; i<100; i++){
    //checking number is divisible by 11
	if ((i%11) == 0){
        //storing element in array
		arrayNum[index] = i;
        index++;
	}
}

console.log("array is: " +arrayNum);