/*
    Game function
        1- Player must guess a number between min and max.
        2- Player gets certain of guesses.
        3- Notify Player of remaning guess.
        4- Notify player of correct answer if loos.
        5- Let Player choose Play Again.

*/


// define vars.
let min = 1,
    max = 10,
    guessLeft = 3,
    winNum = getRandomNum(min,max);


    // UI vars
let minNum = document.querySelector('.min-num');
let maxNum = document.querySelector('.max-num');
let game = document.querySelector('#game');  
let guessInput = document.querySelector('#guess-input');  
let guessBtn = document.querySelector('#guess-btn');
let message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown' , (e)=>{

    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});
guessBtn.addEventListener('click' , ()=>{
    let guess = parseInt(guessInput.value);
    

    //Validation
    if(isNaN(guess) || guess < min || guess > max){
        guessInput.style.borderColor = 'red';
        showMessage(`Please enter a number between min and max` , 'red');
    }

    //check win
    if(guess === winNum){
       gameOver(`${winNum} is correct! YOU WIN!`, 'green');
    }else{
        guessLeft -= 1;

        if(guessLeft === 0){
            gameOver(`Game over , you lose . the correct number was ${winNum}`,'red');
        }else{
            showMessage(`${guess} is not correct, you can  ${guessLeft} time guessing `, 'red');
        }

    }
});


function showMessage(msg , color){
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(msg,color){
    guessInput.disabled = true;

    guessInput.style.borderColor = color;

    showMessage(msg,color);

    //Play Again

    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function getRandomNum(min,max){
   return Math.floor(Math.random() * (max-min+1)+min);
}