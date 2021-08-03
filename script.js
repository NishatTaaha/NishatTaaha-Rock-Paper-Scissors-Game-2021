const startGame = () => {
    let pScore = 0;
    let cScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerChoices = [rockBtn, paperBtn, scissorsBtn];
        const computerChoices = ['rock', 'paper', 'scissors'];

        playerChoices.forEach(choice => {
            choice.addEventListener('click', function () {
                const movesRemain = document.querySelector('.movesleft');
                moves++;
                movesRemain.innerText = `Moves Left: ${10 - moves}`;
                movesRemain.style.fontSize='1.7rem';
                movesRemain.style.margin='2rem';
                movesRemain.style.color='#191919';

                const number = Math.floor(Math.random() * 3);
                const computerSelect = computerChoices[number];

                theWinner(this.innerText, computerSelect);

                if (moves == 10) {
                    gameOver(playerChoices, movesRemain);
                }
            });
        });
    }


    const theWinner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerCount = document.querySelector('.p-result');
        const computerCount = document.querySelector('.c-result');

        const newRow = document.createElement('tr');
        const countsDiv = document.querySelector('.counts');
        countsDiv.style.display='flex';
        countsDiv.style.textAlign='center';

        result.style.backgroundColor = 'black';
        result.style.padding = '1.5rem';
        result.style.color = 'white';
        result.style.borderRadius = '1rem';
        result.style.width = '20rem';
        result.style.fontSize = '1.3rem';
        result.style.fontWeight = 'bold';

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'This is Tie';
            if (player == '✊' && computer == '✊') {
                newRow.innerHTML = `<td>✊</td>
                <td>✊</td>`
                countsDiv.appendChild(newRow);
            }
            else if(player == '✋' && computer == '✋') {
                newRow.innerHTML = `<td>✋</td>
                <td>✋</td>`
                countsDiv.appendChild(newRow);
            }
            else{
                newRow.innerHTML = `<td>✌</td>
                <td>✌</td>`
                countsDiv.appendChild(newRow);
            }
        }

        else if (player == '✊') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won!!';
                cScore++;
                computerCount.textContent = cScore;
                newRow.innerHTML = `<td>✊</td>
                <td>✋</td>`
                countsDiv.appendChild(newRow);
            }
            else {
                result.textContent = 'Player Won!!';
                pScore++;
                playerCount.textContent = pScore;
                newRow.innerHTML = `<td>✊</td>
                <td>✌</td>`
                countsDiv.appendChild(newRow);
            }
        }

        else if (player == '✋') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won!!';
                cScore++;
                computerCount.textContent = cScore;
                newRow.innerHTML = `<td>✋</td>
                <td>✌</td>`
                countsDiv.appendChild(newRow);
            }
            else {
                result.textContent = 'Player Won!!';
                pScore++;
                playerCount.textContent = pScore;
                newRow.innerHTML = `<td>✋</td>
                <td>✊</td>`
                countsDiv.appendChild(newRow);
            }
        }
        
        else if (player == '✌') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won!!';
                cScore++;
                computerCount.textContent = cScore;
                newRow.innerHTML = `<td>✌</td>
                <td>✊</td>`
                countsDiv.appendChild(newRow);
            }
            else {
                result.textContent = 'Player Won!!';
                pScore++;
                playerCount.textContent = pScore;
                newRow.innerHTML = `<td>✌</td>
                <td>✋</td>`
                countsDiv.appendChild(newRow);
            }
        }
    }

    const gameOver = (playerChoices, movesRemain) => {
        const over = document.querySelector('.over');
        const resultBoard = document.querySelector('.resultBoard');
        const reload = document.querySelector('.reload');
        const game = document.querySelector('.game');

        resultBoard.style.margin = '4rem';
        resultBoard.style.fontWeight = 'bolder';

        playerChoices.forEach(choice => {
            choice.style.display = 'none';
        });

        over.innerText = 'Game Over!!';
        over.style.fontSize = '4rem';
        over.style.margin = '4rem'
        movesRemain.style.display = 'none';
        game.style.display = 'none';

        if (pScore > cScore) {
            resultBoard.style.fontSize = '2rem';
            resultBoard.style.color = 'darkgreen';
            resultBoard.innerText = 'Congrats!! You Won The Game!! 🎉 🎉';
        }

        else if (pScore < cScore) {
            resultBoard.style.fontSize = '2rem';
            resultBoard.style.color = 'maroon';
            resultBoard.innerText = 'Alas!! You lost The Game!!🥺 🥺 ';
        }

        else {
            resultBoard.style.fontSize = '2rem';
            resultBoard.style.color = '#191919';
            resultBoard.innerText = 'Woow, Tie!!❤️️❤️️';
        }

        reload.innerText = 'Restart';
        reload.style.border = '2px solid black';
        reload.style.padding = '1rem';
        reload.style.fontSize = '2rem';
        reload.style.color = 'white';
        reload.style.backgroundColor = 'black';
        reload.style.borderRadius = '1rem'
        reload.style.cursor='pointer';

        reload.addEventListener('click', () => {
            window.location.reload();
        });
    }


    playGame();
}

startGame();

