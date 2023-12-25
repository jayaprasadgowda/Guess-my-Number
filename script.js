'use strict';

//DOM MANIPULATON

// console.log(document.querySelector('.message').textContent);//dom manipulatuin,seecting dom nd displaying over browser,interacytng with dom//start guessing


// document.querySelector('.message').textContent = 'Correct Number!';//currect number
// document.querySelector('.number').textContent = 13;//question mark ? change to number 13
// document.querySelector('.score').textContent = 20;


// //text input
// console.log(document.querySelector('.guess').value);//value is used for int //print empty

// document.querySelector('.guess').value = 23;//console.log(document.querySelector('.guess').value);//23


//-------------------------------starts here-------------------//


let secretNumber = Math.trunc(Math.random()*20)+1;//1 for remove decimal
let score =20;
let highScrore=0;
//document.querySelector('.number').textContent = secretNumber;//box number secret




//all data need 

//handle check click button click

document.querySelector('.check').addEventListener('click', function(){

const guess= Number(document.querySelector('.guess').value);



if(!guess){//boolea true or false,false to true converted,onlybexecutes when it is true
    document.querySelector('.message').textContent = 'No Number!';


}else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;//box number secret


    //css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore

    if(score > highScrore){
        highScrore=score;
        document.querySelector('.highscore').textContent = highScrore;
    }



}else if(guess > secretNumber){
    if(score>1){
    
    document.querySelector('.message').textContent = 'Too High Number!';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;

    }




}else if(guess < secretNumber){
    if(score>1){
    
        document.querySelector('.message').textContent = 'Too Low Number!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
    
        }

}




});

document.querySelector('.again').addEventListener('click', function(){

score =20;
secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

   //css
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';








})















