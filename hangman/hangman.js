'use strict'
//Create a method for making a guess.
// 1. Should accept a char for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match
// Prototypal Inheritance

const hangman = function (theWord, numGuesses){
    this.word = theWord.toLowerCase();
    this.guessesAllowed = numGuesses;
    this.incorrectChars = [];
    this.correctChars = [];
    this.currentGuess = '';
}

hangman.prototype.guessCharacter = function(letterGuess){
    if (typeof letterGuess === 'string'){
        this.currentGuess = letterGuess[0].toLowerCase();
    }else{
        return 'You must pass a valid alpha char'
    }
    if (!this.guessesAllowed){
        return 'You already reached your maximum guesses.'
    }
    if (this.incorrectChars.includes(letterGuess)){
        return `You already guessed '${letterGuess}'`;
    }

    if (this.word.includes(letterGuess)){
        this.correctChars.push(letterGuess)
        const sortWord = this.word.split('').sort().join('');
/*        console.log(this.correctChars.sort().join('').toString())
        console.log(sortWord)*/
        const retMsg = (this.correctChars.sort().join('').toString() !== sortWord) ?
        `Your guess: '${letterGuess}' is correct! You have ${this.guessesAllowed} guesses remaining.`
        : 'WINNER, WINNER, CHICKEN DINNER!!!';1
        return retMsg
    }else{
            this.incorrectChars.push(letterGuess);
            this.guessesAllowed-- 
    }

    return `Your guess: '${letterGuess}' is NOT correct! You have ${this.guessesAllowed} guesses remaining.`
}
hangman.prototype.theWord = function(){
    return this.word.replace(/./g, '*'); //regex to loop through the word.   
}

hangman.prototype.getPuzzle = function(){
    let retMsg ='Guessed ';
    this.incorrectChars.forEach((letter)=>{
        retMsg += `"${letter}",`
    })
    retMsg += ' -> ';
    this.word.split('').forEach((letter)=>{
        if (this.correctChars.includes(letter)){
            retMsg += `${letter}`
        }else{retMsg += '*'}
    })    
    return retMsg;
}


//const h1 = new hangman('spinach', 10);
const h2 = new hangman('The', 5);
/*console.log(h2.guessCharacter('e'));
console.log(h2.guessCharacter('r'));
console.log(h2.guessCharacter('t'));
console.log(h2.guessCharacter('r'));
console.log(h2.guessCharacter('g'));
console.log(h2.getPuzzle())
*///console.log(h1)
//console.log(h2)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(h2.guessCharacter(guess))
    console.log(h2.getPuzzle());
})
