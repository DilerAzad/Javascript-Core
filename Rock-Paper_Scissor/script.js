//Game: Rock Paper Scissor
const choices = ['rock', 'paper', 'scissor'];
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const showResult = document.getElementById('result');
const playerShow = document.getElementById('playerScore');
const computerShow = document.getElementById('computerScore');
let playerScore = 0;
let computerScore = 0;

function playGame(choice){
    const comChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    if(comChoice === choice){
        result =  'IT\'S A TIE!';
    }
    else{
        switch(choice){
            case 'rock':
                result =  (comChoice === 'scissor') ? 'YOU WIN!' : 'YOU LOSS!';
                break;
            
            case 'paper':
                result =  (comChoice === 'rock') ? 'YOU WIN!' : 'YOU LOSS!';
                break;
            
            case 'scissor':
                result =  (comChoice === 'paper') ? 'YOU WIN!' : 'YOU LOSS!';
                break;
        }
    }

    playerChoice.textContent = `Player: ${choice}`;
    computerChoice.textContent = `Computer: ${comChoice}`;
    
    showResult.classList.remove('red', 'green');

    showResult.textContent = result;

    if(result === 'YOU WIN!'){
        showResult.classList.add('green')
        playerScore++;
        playerShow.textContent = playerScore;
    }
    else if(result === 'YOU LOSS!') {
        showResult.classList.add('red')
        computerScore++;
        computerShow.textContent = computerScore;
    }
}

