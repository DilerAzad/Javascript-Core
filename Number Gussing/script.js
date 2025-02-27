const min = 1;
const max = 10;
const ans = Math.floor (Math.random () * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }

    else if(guess > ans){
        window.alert("You are too high");
    }

    else if(guess < ans){
        window.alert("You are too low");
    }

    else if(guess != ans){
        window.alert("You have guessed the number wrong");
    }

    else {
        window.alert("You have guessed the number right after " + attempts + "attempts");
        running = false;
    }
    attempts++;
}
