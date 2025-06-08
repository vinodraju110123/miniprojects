let input = document.getElementById('input');
let submit = document.getElementById('submit');
let output = document.getElementById('output');
let guessNum = document.getElementById('guess-number');
let startgame = document.getElementById('startgame');
let guesArray = [];
let computerGuess;


function onStartGame(){
    output.innerText = '';
    guessNum.innerText = '';
    input.disabled = false;
    submit.disabled = false;
    startgame.disabled = true;
    
computerGuess = Math.floor(Math.random()*101);
console.log(computerGuess);

}

function onFinish(message){
    output.innerText = message;
    input.disabled = true;
    submit.disabled = true;
    startgame.disabled = false;
    
}

function onInput(){
  
    const guess = input.value;
    input.value = '';

    // if(guess == ""){
    //     alert("please enter a value");
    //     return;
    // }
    if(isNaN(guess) || guess < 0 || guess > 100){
     output.innerText = "please enter from 0 to 100";
     return;
    }
    guesArray.push(guess);
    guessNum.innerText = `Your Guess: ${guesArray.join(', ')}`
    if(guess > computerGuess) output.innerText = 'too High';
    else if(guess < computerGuess) output.innerText = 'too Low';
    else onFinish("You win");
}



submit.addEventListener('click', onInput);
startgame.addEventListener('click', onStartGame)


onStartGame();