const arrayNum = [1, 2, -3, -11, 5, 6];

for ( i=0; i<arrayNum.length -2; i++ ){
	for ( j = i+1; j<arrayNum.length-1; j++ ){
		for( k=i+2; k<arrayNum.length; k++ ){
			if (arrayNum[i] + arrayNum[j] + arrayNum[k] == 0 ){
				console.log(arrayNum[i], arrayNum[j], arrayNum[k]);
			}
		}
	}
}