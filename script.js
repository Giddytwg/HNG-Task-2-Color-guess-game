// UI Selection and Rendering
const colorBox = document.querySelector('.color-box');
const buttonContainer = document.querySelector('.color-btn-container');
const scoreCount = document.querySelector('.score-count');
const gameCount = document.querySelector('.game-count');
const gameStatus = document.querySelector('.game-status');
const resetBtn = document.querySelector('.reset-button').addEventListener('click', ()=>{ resetGame() })

//An Array of colors, in case more colors are to be added
const colors = [
    {name: 'Electric Blue', value: '#0074d9'},
    {name: 'Hot Pink', value: '#ff0696'},
    {name: 'Lime Green', value: '#32cd32'},
    {name: 'Neon Orange', value: '#ff4500'},
    {name: 'Vivd purple', value: '#8000ff'},
    {name: 'Bright Yellow', value: '#ffd300'},
]

// Render 6 buttons by maping through our array of colors
colors.map((color) =>{

    const btn =  document.createElement('button');
    btn.type = 'submit'
    btn.textContent = color.name;
    btn.setAttribute("data-testid", "colorOption");
    btn.className = 'color-btn';
    btn.setAttribute('value', color.value);
    btn.setAttribute('name', color.name);
    btn.style.backgroundColor = color.value;
    btn.onclick = ()=> playGame(color);

    buttonContainer.appendChild(btn)
})

let score = 0;
function updateScore() {
    scoreCount.textContent = score;
}
function getComputerChoice () {
    const randomColor = colors[Math.floor(Math.random()*6)]
    return randomColor;
}

function resetGame() {
    
    colorBox.style.backgroundColor = '#1b2b34';
    gameStatus.textContent = 'Guess the target color'

    colorBox.classList.add('shake')
    setTimeout(()=>{
        colorBox.classList.remove('shake')
    }, 1000) //removes shake class after 2secs

    score = 0;
    updateScore();

}
function jubiliate(){
    colorBox.classList.add('shake')
    setTimeout(()=>{
        colorBox.classList.remove('shake')
    }, 2500) //removes shake class after 2secs
    resetUI()
}
function resetUI() {
    setTimeout(()=>{
        colorBox.style.backgroundColor = '#1b2b34'
        gameStatus.textContent = 'Guess another color'
    }, 1500)
}


function playGame(playerChoice) {
    const comChoice = getComputerChoice();
    console.log('com choice: ', comChoice.name, 'player choice: ', playerChoice.name);
    if(playerChoice.name !== comChoice.name) {
        gameStatus.textContent = 'Wrong choice, try Again'
        resetUI()
    } else{
            gameStatus.textContent = 'Yay, you guessed right'
            colorBox.style.backgroundColor = playerChoice.value;
            score++
            updateScore();
            jubiliate();
    }

}

