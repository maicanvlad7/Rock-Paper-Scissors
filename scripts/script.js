
let textModifier = document.getElementById("text1");

let good1 = document.getElementById("good1");
let bad1 = document.getElementById("bad1");
let username = null;

//declaring and hiding second set of buttons
let good2 = document.getElementById("good2");
let bad2 = document.getElementById("bad2");

good2.hidden = true;
bad2.hidden = true;



good1.addEventListener("click", function(){
    textModifier.innerHTML = "Hello! What is your name?";
    setTimeout(function(){
       username = prompt("Please insert your name below");
    },1500)
    
    setTimeout(function(){
      textModifier.innerHTML = "Nice to meet you " + username + " !<br>Are you ready to play?" ;
      good1.hidden = true;
      bad1.hidden = true;
      good2.hidden = false;
      bad2.hidden = false;

    },2000)
  
})

bad1.addEventListener("click", function(){
  var win = window.open("https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors", '_blank');
  win.focus();
})

bad2.addEventListener("click", function(){
  var win = window.open("https://www.youtube.com/watch?v=AjZ0KbJcav0", '_blank');
  win.focus();
})
