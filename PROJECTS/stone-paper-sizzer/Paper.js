let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");



const genCompChoice = () =>{
    const options = ["rock" ,"paper", "sizzer"];      //3
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};


const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "GAME WAS DRAW PLAY AGAIN";
    msg.style.backgroundColor= "white";
};


const showWinner = (userwin)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor= "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor= "red";
        
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);  
    const compChoice = genCompChoice();            //2
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "sizzer"? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
            
        }
        showWinner(userWin);
    }
    
};

 
choices.forEach((choice)=>{ 
    choice.addEventListener("click",() =>{ 
        const userChoice = choice.getAttribute("id")  //1
        playGame(userChoice)
    });
});







