//***** THE SCRIPT FOR THE ROCK PAPER SCISSOR GAME ***** 
//*** Version: 1.0.0 */
//*** Author: Maican Vladut */
//*** Date: 28/02/2019 */
//*** Completed in: 2-3 hours */


let bo3 = document.getElementById("b3");
let bo5 = document.getElementById("b5");
let btnreset = document.getElementById("reset");
let gameZone = document.getElementById("micu");
let userScore = 0;
let botScore = 0;
let scoreLimit = 0;

let audioWin = new Audio('sounds/win.mp3');
let audioLose = new Audio('sounds/lose.mp3');


//declaring the images that can be pressed -> eventListener
let cut = document.getElementById("s");
let rock = document.getElementById("r");
let paper = document.getElementById("p");

//declaring the p1/p2 score value (using the innerHTML property)
let p1s = document.getElementById("p1score");
let p2s = document.getElementById("p2score");

//text zone for player choice
let result = document.getElementById("result");

let startText = document.getElementById("best");
result.hidden = true; //hides win/lose text
gameZone.hidden= true; //hides the images and the reset button


//adding actions on the best of 3 button click
bo3.addEventListener("click", function(){
    scoreLimit = 3;
    startText.innerHTML = "You are now playing Best Of 3!💖";
    setTimeout(function(){
        bo3.hidden = true;
        bo5.hidden = true;
        result.hidden = false;
        gameZone.hidden = false;
        document.getElementById("best").hidden = true;
    },2000)
})

//adding actions on the best of 5 button click
bo5.addEventListener("click", function(){
    scoreLimit = 5;
    startText.innerHTML = "You are now playing Best Of 5!💖";
    setTimeout(function(){
        bo3.hidden = true;
        bo5.hidden = true;
        result.hidden = false;
        gameZone.hidden = false;
        document.getElementById("best").hidden = true;
    },2000)
})

//converts choices to words so they can be displayed in the result innerHTML
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
}

//gets a randomly generated number from 1-3 and selects rock/paper/scissors for the PC
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//check if user/bot score is equal to limit score and does some things accordingly
function winCheck(){
    if(userScore === scoreLimit){
        p1s.style.color = "green";
        result.innerHTML = "The Not So Artificial Inteligence wins🧠 ... this time!<br>Well done!";
        gameZone.hidden = true;
        audioWin.play();
        setTimeout(function(){
            location.reload();
        },5500);
    } else if (botScore === scoreLimit) 
    {
        p2s.style.color = "green";
        result.innerHTML = "MarvBOT🤖 is better, just accept it!<br> Maybe next time you'll have a chance.";
        gameZone.hidden = true;
        audioLose.play();
        setTimeout(function(){
            location.reload();
        },5500);
}
}

cut.addEventListener("click", function(){
    game("s");
    winCheck();
});

rock.addEventListener("click",function(){
    game("r");
    winCheck();
})

paper.addEventListener("click",function(){
    game("p");
    winCheck();
})

//this happens when one of the 3 win cases from the switch is met
function win(userChoice, computerChoice){
   
    userScore ++;
    p1s.innerHTML = userScore;
    p2s.innerHTML = botScore;
    result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You WIN!🔥🔥";  
}
//this function gets called when one of the 3 lose cases from the switch is met
function lose(userChoice, computerChoice){
   
    botScore ++;
    p1s.innerHTML = userScore;
    p2s.innerHTML = botScore;
    result.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You LOSE !😢💩";
}
//this function gets called when one of the 3 draw cases from the switch is met
function draw(userChoice, computerChoice){

    result.innerHTML = convertToWord(userChoice) + " = " + convertToWord(computerChoice) + " so... it's a DRAW ";
}

//function that takes an user choice and compares it with the computer choice - must be passed as an argument
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        }
    }

//function for the reset game button, not so useful but it's ok
    btnreset.addEventListener("click", function(){
        userScore = 0;
        botScore = 0;
        location.reload();
    })


