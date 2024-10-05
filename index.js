let userScore=0;
let computerScore=0;

let choices=document.querySelectorAll(".choice");
let usrScr=document.querySelector("#user-score");
let cmpScr=document.querySelector("#computer-score");
let msgBox=document.querySelector(".msg");
let rstBtn=document.querySelector(".resetBtn");


function ResetBtn(){
    usrScr.innerText=0;
    cmpScr.innerText=0;
    msgBox.style.backgroundColor="rgb(178, 76, 178)";
    msgBox.innerText="Lets start the game";


    
}


rstBtn.addEventListener("click",()=>{
    ResetBtn();


})


let computerChoices=()=>{
    let choices=["stone","paper","scissor"];
    let radomIndex=Math.floor(Math.random()*3);
    return choices[radomIndex];

}

function matchDraw(){
    msgBox.innerText="Wow! Game Draw";
    console.log("match draw");
    msgBox.style.backgroundColor="rgb(32, 122, 178)";



}

function showWinner(userWin,userChoice,computerChoice){

  if(userWin){
    userScore++;
    usrScr.innerText=userScore;
    msgBox.innerText=`Congrats, Your ${userChoice} break ${computerChoice}`;
    msgBox.style.backgroundColor="green";

  }
  else{
    computerScore++;
    cmpScr.innerText=computerScore;
    msgBox.innerText="Oops, You Loose";
    msgBox.style.backgroundColor="red";



  }
}


let playGame=(userChoice) => {
  let computerChoice=computerChoices()

   if(userChoice===computerChoice){
    matchDraw();
}
   else{
      let userWin=true;
      if(userChoice==="stone"){
           userWin = computerChoice==="scissor" ? true:false;
      }
      else if(userChoice==="paper"){
        userWin = computerChoice==="stone"?true:false;
      }
      else{
        userWin = computerChoice==="paper"?true:false;
      }
      showWinner(userWin,userChoice,computerChoice);

   }

}

for(let value of choices){
    value.addEventListener("click",()=>{
        let userChoice = value.getAttribute("id")
        playGame(userChoice)
    })

   
 
}

