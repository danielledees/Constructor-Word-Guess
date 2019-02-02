// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.

var Word = require ("./word");
var inquirer = require('inquirer');

var words = ["dog", "cat", "tiger"];

var currentWord = words[Math.floor((Math.random() * 3))];

var gameWord = new Word();

gameWord.createWord(currentWord);


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
      if(status.includes('_')){
          promptUser()
      }else {
          console.log(status)
          console.log("You win")
      }
    // Use user feedback for... whatever!!
  });

}

promptUser()

