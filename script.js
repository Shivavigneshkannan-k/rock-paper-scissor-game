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

// const playerChoice = () => {
   




const calResult = () =>{
    //you win
    if (userChoice == 'rock' && compChoice== 'scissor'){
        score++;
        instantScore=1;
        showResult()

    }else if(userChoice == 'scissor' && compChoice== 'paper'){
        score++
        instantScore=1;
        showResult()

    }else if(userChoice == 'paper' && compChoice== 'rock'){
        score++
        instantScore=1;
        showResult()

    }
    //draw
    else if(userChoice == 'rock' && compChoice== 'rock'){
        instantScore=0;
        showResult()

        
    }else if(userChoice == 'paper' && compChoice== 'paper'){
        instantScore=0;
        showResult()

        
    }else if(userChoice == 'scissor' && compChoice== 'scissor'){
        instantScore=0;
        showResult()

        
    }
    // you lose
    else if (compChoice == 'rock' && userChoice== 'scissor'){
        score--;
        instantScore=-1;
        showResult()

    }else if(compChoice == 'scissor' && userChoice== 'paper'){
        score--
        instantScore=-1;
        showResult()

    }else if(compChoice == 'paper' && userChoice== 'rock'){
        score--
        instantScore=-1;
        showResult()
    }
}
const showResult = ()=>{
    if (instantScore==1){
        vsDiv.innerText=`You choose 👉${userChoice} and computer choose👉${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='you won'
        
    }else if (instantScore==0){
        vsDiv.innerText=`You choose 👉${userChoice} and computer choose👉${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='Draw handshake'
        
    }else if (instantScore==-1){
        vsDiv.innerText=`You choose 👉${userChoice} and computer choose👉${compChoice}`
        scoreDiv.innerText=`Score : ${score}`
        resultDiv.innerText='you lose 😓💔'
        
    }
}


rockDiv.onclick = ()=>{
    userChoice = rockDiv.getAttribute('id')
    computerChoice()
    console.log(compChoice)
    calResult()
}
// console.log(userChoice)


paperDiv.onclick=()=>{
    userChoice= paperDiv.getAttribute('id')
    computerChoice()
    calResult()
}
// console.log(userChoice)


scissorDiv.onclick=()=>{
    userChoice= scissorDiv.getAttribute('id')
    computerChoice()
    calResult()
// console.log(userChoice)
}


// console.log(userChoice)
// calResult(compChoice,userChoice)

