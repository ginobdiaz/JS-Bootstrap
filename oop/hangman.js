'use strict'

// Prototypal Inheritance

const hangman = function (theWord, numGuesses){
    this.word = theWord.toLowerCase();
    this.guessesAllowed = numGuesses;
    this.guessedChars = [];
    this.correctChars = [];
    this.currentGuess = '';
}

hangman.prototype.guessCharacter = function(letterGuess){
    if (typeof letterGuess === 'string'){
        this.currentGuess = letterGuess[0].toLowerCase();
    }else{
        return 'You must pass a valid alpha char'
    }
    if (this.guessedChars.includes(letterGuess)){
        return `You already guessed '${letterGuess}'`;
    }
    if ( this.guessedChars.length < (this.guessesAllowed)){
        if (this.word.includes(letterGuess)){
            this.correctChars.push(letterGuess)
        }
        this.guessedChars.push(letterGuess);
        return `Your guess: '${letterGuess}' is correct!`
    }
    return `Your guess: '${letterGuess}' is NOT correct!`
}
hangman.prototype.theWord = function(){
    return this.word.replace(/./g, '*'); //regex to loop through the word.   
}

hangman.prototype.getPuzzle = function(){
    let retMsg ='Guessed ';
    this.guessedChars.forEach((letter)=>{
        retMsg += `"${letter}",`
    })
    retMsg += ' -> ';
    this.word.split('').forEach((letter)=>{
        if (this.guessedChars.includes(letter)){
            retMsg += `${letter}`
        }else{retMsg += '*'}
    })    
    return retMsg;
}


//const h1 = new hangman('spinach', 10);
const h2 = new hangman('The', 5);
console.log(h2.guessCharacter('e'));
console.log(h2.guessCharacter('t'));
console.log(h2.getPuzzle())
//console.log(h1)
//console.log(h2)