'use strict';
let upper = 20;
let lower = 1;
let secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
console.log(secNumber);
var score = 20
const message = document.querySelector(".start-message");
const checkClick = document.querySelector("button");
const input = document.querySelector('input');
const screenNumber = document.querySelector(".screen-number");
const refreshClick = document.querySelector(".refresh-click");
const scorePlay = document.querySelector(".scoreplayer");
const highscore = document.querySelector(".highscore");
scorePlay.textContent = score
var highScore = 0;
checkClick.addEventListener('click',function(){
     if(score > 0)
     {
        if(input.value !== "")
        {
            if(input.value >0 && input.value <21)
            {
                let inputNumber = Number(input.value);
                console.log(inputNumber);
                if(inputNumber === secNumber)
                {
                message.textContent = "congratulations !";
                screenNumber.textContent = secNumber;
                    if(score > highScore)
                    {
                        highScore = score;
                    highscore.textContent = highScore;
                    }
                }
                else if (inputNumber < secNumber)
                {
                    message.textContent = "you are too low !";
                    score--;
                    scorePlay.textContent = score

                }
                else
                {
                    message.textContent = "you are too high !";
                    score--;
                    scorePlay.textContent = score
                }
            } 
            else
            {
                message.textContent = "Enter a valid number !";
            }
        }
        else 
        {
            message.textContent = "Please enter the number !"
        } 
     }
     else
     {
        message.textContent = " Game Over !"
     }
})

refreshClick.addEventListener('click', function(){
    secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
    console.log(secNumber);
    score = 20;
    scorePlay.textContent = score;
    input.value = '';
    screenNumber.textContent = "?";
    

})





