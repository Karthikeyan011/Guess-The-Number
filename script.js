'use strict';
let number=Math.trunc(Math.random()*10)+1;
let score=20;
let highscore=0;
const dis=function(message)
{
    document.querySelector('.startgues').textContent=message;
}
document.querySelector('.check').addEventListener('click',function()
{
    if(score>1)
    {
    const guess=Number(document.querySelector('.num').value);
    if(!guess)
    {
       dis('❌No number❌');  
    }
    else if(guess===number)
    {
       dis('Correct Number🥳🥳');
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='15rem';
   }
    else if(guess!==number)
    {
        dis(guess>number?'Too high😠':'Too Low👇');
        score--;
        document.querySelector('.score').textContent=score;

    }
    if(score>highscore && guess===number)
{
 highscore=score;
 document.querySelector('.high').textContent=highscore; 
} 
}
else {
     dis('You Lost the game😟😟');
     document.querySelector('.score').textContent=0;
}
}
);
document.querySelector('.butt').addEventListener('click',function()
{
   score=20;
   number=Math.trunc(Math.random()*10)+1;
   document.querySelector('.startgues').textContent='Start Guessing';
   document.querySelector('.score').textContent=20;
   document.querySelector('.num').value='';
   document.querySelector('body').style.backgroundColor='grey';
   document.querySelector('.number').textContent='?';
}
);