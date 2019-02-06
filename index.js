// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.

var Word = require ("./word");
var inquirer = require('inquirer');

var words = ["dog", "monkey", "tiger", "rooster", "pig", "rat", "ox", "rabbit", "dragon", "snake", "horse", "sheep"];

var currentWord = words[Math.floor(Math.random() * words.length)];

var gameWord = new Word();

var guessesLeft = 10;


startGame()


function promptUser(){
    
    console.log(gameWord.display());

  inquirer
  .prompt([
      {
          name: "guess",
          message: "Guess a Letter",
          type: 'input'
      }
     
  ])
  .then(answers => {
    
      gameWord.guess(answers.guess);
      var status = gameWord.display();

      if (guessesLeft === 0) {
          endGame()
      }
     
      else if(status.includes('_')) {
        console.log("Keep Guessing");
        
        guessesLeft--
        console.log(guessesLeft + " tries left")
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
        console.log("\n")
          promptUser()
          


    
      } else  {
          console.log(status)
          //console.log("You win")
          winGame()
      }
    
  });//end then promise

}//end prompt user 



function winGame() {
    console.log("WINNER WINNER CHICKEN DINNER!!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("\n")
    inquirer.prompt ([
        {
           type: "confirm",
           name: "again",
            message: "Play Again?"
        }
    ]).then(function(answers) {
        if (answers===true) {
        startGame()
    }

})   
}//end win game function

function endGame() {
    console.log("LOSER!!")
    console.log("~~~~~~~~~")
    console.log("\n")
    inquirer.prompt ([
        {
            type: "confirm",
            name: "again",
            message: "Play Again?"
        }
    ]).then(function(answers) {
        if (answers ===true) {
            startGame()
          

        }
    })
}//end endGame function



function startGame () {
    gameWord.createWord(currentWord);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("Welcome! You have 10 tries to guess the word")
console.log("Theme is Chinese New Year Animals")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log('\n')
promptUser()

}//end startGame function



