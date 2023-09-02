const vsDiv = document.getElementById('vs');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorDiv = document.getElementById('scissor');
const resetDiv =  document.getElementById('reset');

let score = 0;
const choices = ['rock','paper','scissor'];
let compChoice;
let userChoice;
let instantScore;
const computerChoice = () => {
   let randomNum= Math.floor(Math.random()*3);
   compChoice=choices[randomNum];

}

const playerChoice = () => {
   
    rockDiv.onclick=()=>{
        userChoice= rockDiv.getAttribute('id')
    // console.log(userChoice)
}
    
    paperDiv.onclick=()=>{
        userChoice= paperDiv.getAttribute('id')
    // console.log(userChoice)
}
    
    scissorDiv.onclick=()=>{
        userChoice= scissorDiv.getAttribute('id')
    // console.log(userChoice)
}


}
const calResult = ()=>{
    computerChoice()
    playerChoice()
    //you win
    if (userChoice == 'rock' && compChoice== 'scissor'){
        score++;
        instantScore=1;
        showResult(compChoice,playerChoice,instantScore)

    }else if(userChoice == 'scissor' && compChoice== 'paper'){
        score++
        instantScore=1;
        showResult(compChoice,playerChoice,instantScore)

    }else if(userChoice == 'paper' && compChoice== 'rock'){
        score++
        instantScore=1;
        showResult(compChoice,playerChoice,instantScore)

    }
    //draw
    else if(userChoice == 'rock' && compChoice== 'rock'){
        instantScore=0;
        showResult(compChoice,playerChoice,instantScore)

        
    }else if(userChoice == 'paper' && compChoice== 'paper'){
        instantScore=0;
        showResult(compChoice,playerChoice,instantScore)

        
    }else if(userChoice == 'scissor' && compChoice== 'scissor'){
        instantScore=0;
        showResult(compChoice,playerChoice,instantScore)

        
    }
    // you lose
    else if (compChoice == 'rock' && userChoice== 'scissor'){
        score--;
        instantScore=-1;
        showResult(compChoice,playerChoice,instantScore)

    }else if(compChoice == 'scissor' && userChoice== 'paper'){
        score--
        instantScore=-1;
        showResult(compChoice,playerChoice,instantScore)

    }else if(compChoice == 'paper' && userChoice== 'rock'){
        score--
        instantScore=-1;
        showResult(compChoice,playerChoice,instantScore)
    }
}
const showResult=(compChoice,playerChoice,instantScore)=>{
    if (instantScore==1){
        vsDiv.innerText=`player choose:${playerChoice} and computer choose:${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='you won'
        
    }else if (instantScore==0){
        vsDiv.innerText=`player choose:${playerChoice} and computer choose:${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='Draw'
        
    }else if (instantScore==-1){
        vsDiv.innerText=`player choose:${playerChoice} and computer choose:${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='you lose'
        
    }
}



    

// console.log(userChoice)
// calResult(compChoice,userChoice)

