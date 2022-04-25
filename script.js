function guessGame(){
    quit=0;
    trial=1;
    max=prompt("hey, welcome to the guessgame. type your max number. (you can type 'q' to quit the game anytime you want.)");
    while(isNaN(max) && max!="q"){
        max=prompt("invalid input. retype your max number");
    }
    if(max==="q"){
        alert("you quitted the game. see you :/");
        return;
    }
    ranNum= Math.round(Math.random()*max);
    val=prompt("enter your first guess");
    while(isNaN(val) && val!="q"){
        val=prompt("invalid input. retype your first number");
    }
    if(val==="q"){
        alert("you quitted the game. see you :/");
        return;
    }
    while(val!=ranNum){
        if(val<ranNum){
            val=prompt("too low, try again.     "+trial+" trials so far");
            while(isNaN(val) && val!="q"){
                val=prompt("invalid input. retype your number");
            }
            trial++;
        }
        if(val>ranNum){
            val=prompt("too high, try again     "+trial+" trials so far");
            while(isNaN(val) && val!="q"){
                val=prompt("invalid input. retype your number");
            }
            trial++;
        }
        if(val==="q"){
            quit=1;
            alert("you quitted the game. see you :/");
            break;
        }
    }
    if(quit===0){
        alert("congrats. it took "+trial+" guesses");
        return;
    }
}