let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");





const genCompChoice =()=>{
  const options = ["Rock","Paper","Scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
   }

const drawGame = ()=>{
    console.log("Game is Draw!!");
    msg.innerText= "Game is Draw! , Play Again";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin) => {

    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = "You Win!!";
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose!!");
        msg.innerText = "You Lose!!";
        msg.style.backgroundColor = "Red";
        
    }

}






const playgame = (userChoice)=>{
        console.log("User Choice = ",userChoice);

        const compChoice = genCompChoice();
        console.log("Comp Choice = ",compChoice );

        if(userChoice === compChoice){

            drawGame();
        }
        else{
        
        let userWin = true;

        if(userChoice === "Rock"){
            userWin = compChoice === "Paper"? false:true;
        }
        if(userChoice === "Paper"){
            userWin = compChoice=== "Rock"? true:false;

        }
        if(userChoice === "Scissor"){
            userWin = compChoice === "Paper"? true:false;
        }
    
        showWinner(userWin);
    }
   

}


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })

})