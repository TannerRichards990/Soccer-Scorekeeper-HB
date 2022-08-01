// import functions and grab DOM elements
import { renderGame } from './render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const teamOneInput = document.getElementById('team-one');
const teamTwoInput = document.getElementById('team-two');



// create an array to hold on to the state of past games

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;
let pastGames = [];

nameFormButton.addEventListener('click', () => {
    // get the name data from the form
    const teamOneName = teamOneInput.value;
    teamOneLabel.textContent = teamOneName;
    const teamTwoName = teamTwoInput.value;
    teamTwoLabel.textContent = teamTwoName;
    

    // set the state to this data from the form
    name1 = teamOneInput.value;
    name2 = teamTwoInput.value;
    
    
    // reset the form values
    
    teamOneInput.value = '';
    teamTwoInput.value = '';
    
    
    refreshCurrentGameEl();

});


teamOneAddButton.addEventListener('click', () => {
    
    currentGameEl.textContent = '';
    score1++;
    
    refreshCurrentGameEl();


});

teamTwoAddButton.addEventListener('click', () => {
    
    currentGameEl.textContent = '';
    score2++;

    refreshCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    
    currentGameEl.textContent = '';
    score1--;

    refreshCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    
    currentGameEl.textContent = '';
    score2--;
    
    refreshCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    
    
    // currentGameEl.push(pastGames);

    const currentGameData = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2, 
    };


    pastGames.push(currentGameData);
    pastGamesEl.textContent = '';

    displayAllGames();
    name1 = '',
    name2 = '',
    score1 = '',
    score2 = '',
    currentGameEl.textContent = '',
    refreshCurrentGameEl();
});

function refreshCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    // const gameEl = . . . 
    // make a new gameEl here by calling renderGame with the approriate arguments. 
    // Check the renderGame function declaration in render-utils.js to figure out the correct arguments to pass to this function 
    // In render-utils.js as yourself: How many arguments does the function take? What order does it take them in?
    const theGame = renderGame(name1, name2, score1, score2);
    theGame.classList.add('current');
    currentGameEl.append(theGame);
}


function displayAllGames() {

    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
    

    // loop through the past games in state
    for (let game of pastGames){
        const gameEl = renderGame(game.name1, game.name2, game.score1, game.score2);
        pastGamesEl.append(gameEl);
    }

    // use the renderGame function to render and append a past game for each past game in state
    // again, review the renderGame function in render-utils.js. How many arguments does it take? What order does it take them in?
}
