// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.getElementById('#start-game-button');
const userName = document.querySelector(`#game-name`);
const userSelection = document.getElementById('#user-selection');
const goButton = document.getElementById('#go-button');
const scoreParagraph = document.getElementById('#score');
const gameHistoryParagraph = document.getElementById('#game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;
game = new RockPaperScissors(username);

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  game.username, game.score;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = 
  game = new RockPaperScissors(userName);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });