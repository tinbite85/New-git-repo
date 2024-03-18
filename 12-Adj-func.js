let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
}; //convert from JSON strin g to JavaScript object by '.parse()'
// console.log(UpdateScoreEle());

document.querySelector('.js-moves').innerHTML;

document.querySelector('.js-result').innerHTML;


function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissor";
    }
    return computerMove;
}
let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
};

document.querySelector('.rock-button').addEventListener('click', () => {
    playGame('rock'); 
});

document.querySelector('.paper-button').addEventListener('click', () => {
    playGame('paper'); 
});

document.querySelector('.scissor-button').addEventListener('click', () => {
    playGame('scissor'); 
});

//keydown allows to play this game by clicking keys 
//and will read it by the event value

document.body.addEventListener('keydown', (event) => {
   if(event.key === 'r'){
    playGame('rock');
   } 
   else if (event.key === 'p'){
    playGame('paper');
   }
   else if(event.key === 's'){
    playGame('scissor');
   }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";
    //this will return the value when rock is entered
    if (playerMove === "Rock") {
        const computerMove = pickComputerMove();
        console.log(computerMove);

        if (computerMove === "Rock") {
            result = "Tie";
        } else if (computerMove === "Paper") {
            result = "You lose";
        } else if (computerMove === "Scissor") {
            result = "You win";
        }
    }


    //this will return the value when paper is entered
    else if (playerMove === "Paper") {
        const computerMove = pickComputerMove();

        console.log(computerMove);

        if (computerMove === "Rock") {
            result = "You win";
        } else if (computerMove === "Paper") {
            result = "Tie";
        } else if (computerMove === "Scissor") {
            result = "You lose";
        }
    }

    //this will return the value when scissor is entered
    else if (playerMove === "Scissor") {
        if (computerMove === "Rock") {
            result = "You lose";
        } else if (computerMove === "Paper") {
            result = "You win";
        } else if (computerMove === "Scissor") {
            result = "Tie";
        }
    }


    //update result
    if (result === "You win") {
        score.wins += 1;
    } else if (result === "You lose") {
        score.losses = score.losses + 1;
    } else if (result === "Tie") {
        score.tie = score.tie + 1;
    }

    function UpdateScoreEle() {
        document.querySelector('.js-score').innerHTML =
            `Wins: ${score.wins}, Loss: ${score.losses}, Tie: ${score.tie}`;
    }

    console.log(localStorage.setItem("score", JSON.stringify(score)));

    UpdateScoreEle();


    document.querySelector('.js-moves').innerHTML =
        `You ${playerMove} - Computer ${computerMove} `;

    document.querySelector('.js-result').innerHTML = result;

}

//localStorage only supports strings
/*alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Loss: ${score.losses}, Tie: ${score.tie}`);
}*/

//console.log(JSON.stringify(someProduct))
//this will convert a javascript object to a JSON file

//JSON.parse will convert from JSON to a JAvascript file
