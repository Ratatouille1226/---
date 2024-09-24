let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHight = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    
    if (guessCount === 1) {
        guesses.textContent = "Предыдущие предположения: ";
    }
    guesses.textContent += userGuess + " | ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Вы победили, слово отгадано!";
        lastResult.style.backgroundColor = 'green';
        lowOrHight.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "Попытки закончились, вы проиграли :(";
        lastResult.style.backgroundColor = 'red';
        lowOrHight.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = "Не верно";
        lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                lowOrHight.textContent = "Ваше число меньше загаданного...";
            } else if (userGuess > randomNumber) {
                lowOrHight.textContent = "Ваше число больше загаданного...";
            }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessSubmit.disabled  = true;
    guessField.disabled  = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Начать новую игру";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
            resetPara.textContent = "";
        }

    guessSubmit.disabled = false;
    guessField.disabled  = false;
    lastResult.style.backgroundColor = 'white';
    resetButton.parentNode.removeChild(resetButton);

    randomNumber = Math.floor(Math.random() * 100) + 1;
}