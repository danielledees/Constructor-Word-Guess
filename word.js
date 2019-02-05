// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js");

function Word() {
    this.word = []
    this.createWord = function(word){
        var letters = word.split('');
       
        letters.forEach(l => {
            this.word.push(new Letter(l));
        })
        
    }
    this.display = function(){
        var arr = []
        this.word.forEach(l => {
            arr.push(l.check())
        })
        return arr.join(' ')
    }
    this.guess = function(val){
        this.word.forEach(l => {
            l.guess(val);
        })
    }
}

// var dog = new Word();

// dog.createWord('dog');
// dog.guess('o');
// dog.guess('g')
// dog.guess('d')
//dog.display();

module.exports = Word