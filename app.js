let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let playAgain = document.querySelector("#play-again");


let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];





//----------------------------------------Pressing X & O

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("Box clicked");
        if (turnX){
            box.innerText='X';
            turnX = false;
        }else{
            box.innerText='O';
            turnX = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//---------------------------------Disable Boxes
const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
//--------------------------------Enable Boxes
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}; 

//------------------------------------------Diaplay Winner

let player1score = 0;
let player2score = 0;
let player1ScoreDisplay = document.querySelector("#ScoreDisplay1");
let player2ScoreDisplay = document.querySelector("#ScoreDisplay2");

const showWinner = (winner) =>{
    msg.innerText =  `Congratulations, the winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
     if (winner === "X"){
        player1score++;
        player1ScoreDisplay.innerText = player1score;
    }else{
        player2score++;
        player2ScoreDisplay.innerText = player2score;
    }
    
} 



    
    



//-----------------------------------------Checking Winner

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const startNewGame = () => {

    player1score = 0;
    player2score = 0;

    player1ScoreDisplay.innerText = 0;
    player2ScoreDisplay.innerText = 0;

    turnX = true;
    enableBoxes();
    msgCont.classList.add("hide");
};

const playAgainGame = () => {
    turnX = true;
    enableBoxes();
    msgCont.classList.add("hide");
};


//-------------------------------------Reset Button
const resetGame = () =>{
    turnX=true;
    enableBoxes();
    msgCont.classList.add("hide");  
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", startNewGame);
playAgain.addEventListener("click", playAgainGame);