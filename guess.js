const max = prompt("Enter the max number");
console.log(max);

const random=Math.floor(Math.random() * max)+1;
console.log(random);

let guess=prompt("guess the number");

while(true){
    if(guess=='quit'){
        console.log("User has quit");
        break;
    }

    else if(guess==random){
        console.log("You guessed it right!");
        break;
    }
    else if(guess < random){
        guess=prompt("your guess was too small.please try again");
    }
    else{
        guess=prompt("Your guess is too large.Please try again");
    }
}
