'use strict';
let upper = 20;
let lower = 1;
let secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
console.log(secNumber);
const message = document.querySelector(".start-message");
const checkClick = document.querySelector("button");
const input = document.querySelector('input');
const screenNumber = document.querySelector(".screen-number");
checkClick.addEventListener('click',function(){
let inputNumber = Number(input.value);
console.log(inputNumber);
if(inputNumber === secNumber)
{
   message.textContent = "congratulations !";
}
else if (inputNumber < secNumber)
{
    message.textContent = "you are too low !";
}
else{
    message.textContent = "you are too high !";
}
})
screenNumber.textContent = secNumber;



