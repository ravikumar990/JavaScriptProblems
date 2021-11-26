let head = 1;
let tail = 1;

while (true){
    let flip = Math.floor(( Math.random() * 2 ) + 1);

    console.log(flip);

	switch(flip) {
        case 0:
			if ((head == 11) || (tail == 11)){
                break;
            }
            else{
                head++;
                console.log(head);
            }
        case 1:
            if ((head == 11) || (tail == 11)){
                break;
            }
            else{
                tail++;
                console.log(tail);
            }
    }
}

if (head > tail){
    console.log("HEADS Won");
}
else{
    console.log("TAILS Won");
}