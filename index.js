// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.

var Word = require ("./word");
var inquirer = require('inquirer');

var words = ["dog", "cat", "tiger"];

var currentWord = words[Math.floor((Math.random() * 3))];

var gameWord = new Word();

var guessesLeft = 10;



function winGame() {
    console.log("WINNER WINNER CHICKEN DINNER!!")
    inquirer.prompt ([
        {
           type: "confirm",
           name: "again",
            message: "Play Again?"
        }
    ]).then(function(answers) {
        if (answers===true) {
        gameWord.createWord(currentWord);
        //promptUser()
    }

})   
}

function endGame() {
    console.log("LOSER!!")
    inquirer.prompt ([
        {
            type: "confirm",
            name: "again",
            message: "Play Again?"
           
        }
    ]).then(function(answers) {
        if (answers ===true) {
            gameWord.createWord(currentWord);
            //promptUser()
        }


    })
        

}




gameWord.createWord(currentWord);

console.log("Welcome! You have 10 tries to guess the word")
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
        console.log(guessesLeft)
          promptUser()

    
      } else  {
          console.log(status)
          //console.log("You win")
          winGame()
      }
    
  });

}

promptUser()



