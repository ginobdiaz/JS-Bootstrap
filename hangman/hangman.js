'use strict'
//Create a method for making a guess.
// 1. Should accept a char for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match
class Hangman {
    constructor(theWord, numGuesses){
        this.word = theWord.toLowerCase();
        this.guessesAllowed = numGuesses;    
        this.incorrectChars = [];
        this.correctChars = [];
        this.currentGuess = '';
    }
    guessCharacter(letterGuess){
        if (typeof letterGuess === 'string'){
            this.currentGuess = letterGuess[0].toLowerCase();
        }else{
            return 'You must pass a valid alpha char'
        }
        if (!this.guessesAllowed){
            const retMsg = 'Sorry you lose. You reached your maximum guesses.<br/>' + `The word was ${this.word}`
            return retMsg
        }
        if (this.incorrectChars.includes(letterGuess) || this.correctChars.includes(letterGuess)){
            return `You already guessed '${letterGuess}'`;
        }
    
        if (this.word.includes(letterGuess)){
            this.correctChars.push(letterGuess)
            const sortWord = this.word.split('').sort().filter((item, pos, ary) => !pos || item != ary[pos - 1]).join('');
            const retMsg = (this.correctChars.sort().join('').toString() !== sortWord) ?
               this.checkForLastGuess(letterGuess) : 'WINNER, WINNER, CHICKEN DINNER!!!';        
            return retMsg
        }else{
                this.incorrectChars.push(letterGuess);
                this.guessesAllowed-- 
        }
    
        return `Your guess: '${letterGuess}' is NOT correct! You have ${this.guessesAllowed} guesses remaining.`
    }    
    checkForLastGuess(letter){
        let guessMsg = `Your guess: '${letter}'`
        if (this.guessesAllowed === 0){
            guessMsg += ' is NOT correct<br\>Sorry you lose because you reached your maximum guesses.'
        }else{
            guessMsg +=  `is correct<br\>You have ${this.guessesAllowed} guesses remaining.`
        }
        return guessMsg;
    }
    theWord(){
        return this.word.replace(/./g, '*'); //regex to loop through the word.   
    }    
    get Guesses(){
        let retMsg ='Guessed ';
        this.incorrectChars.forEach((letter)=>{
            retMsg += `"${letter}",`
        })
        return retMsg;
    }
    get Puzzle(){
        let retMsg = '';
        this.word.split('').forEach((letter)=>{
            if (this.correctChars.includes(letter)){
                retMsg += `${letter}`
            }else{retMsg += '*'}
        })    
        return retMsg;
    }
} 


/* hangman.prototype.guessCharacter = function(letterGuess){
    if (typeof letterGuess === 'string'){
        this.currentGuess = letterGuess[0].toLowerCase();
    }else{
        return 'You must pass a valid alpha char'
    }
    if (!this.guessesAllowed){
        const retMsg = 'Sorry you lose. You reached your maximum guesses.<br/>' + `The word was ${this.word}`
        return retMsg
    }
    if (this.incorrectChars.includes(letterGuess)){
        return `You already guessed '${letterGuess}'`;
    }

    if (this.word.includes(letterGuess)){
        this.correctChars.push(letterGuess)
        const sortWord = this.word.split('').sort().filter((item, pos, ary) => !pos || item != ary[pos - 1]).join('');
        //const sortWord = this.word.split('').sort().join('');
        console.log(this.correctChars.sort().join('').toString())
        console.log(sortWord)

//         const retMsg = (this.correctChars.sort().join('').toString() !== sortWord) ?
//        `Your guess: '${letterGuess}' is correct! You have ${this.guessesAllowed} guesses remaining.`
//        : 'WINNER, WINNER, CHICKEN DINNER!!!'; 
        const retMsg = (this.correctChars.sort().join('').toString() !== sortWord) ?
           this.checkForLastGuess(letterGuess) : 'WINNER, WINNER, CHICKEN DINNER!!!';        
        return retMsg
    }else{
            this.incorrectChars.push(letterGuess);
            this.guessesAllowed-- 
    }

    return `Your guess: '${letterGuess}' is NOT correct! You have ${this.guessesAllowed} guesses remaining.`
} */
/* hangman.prototype.checkForLastGuess = function(letter){
    let guessMsg = `Your guess: '${letter}'`
    if (this.guessesAllowed === 0){
        guessMsg += ' is NOT correct<br\>Sorry you lose because you reached your maximum guesses.'
    }else{
        guessMsg +=  `is correct<br\>You have ${this.guessesAllowed} guesses remaining.`
    }
    return guessMsg;
} */
/* hangman.prototype.theWord = function(){
    return this.word.replace(/./g, '*'); //regex to loop through the word.   
}
 */
/* hangman.prototype.getPuzzle = function(){
    let retMsg = '';
    this.word.split('').forEach((letter)=>{
        if (this.correctChars.includes(letter)){
            retMsg += `${letter}`
        }else{retMsg += '*'}
    })    
    return retMsg;
} */

/* hangman.prototype.getGuesses = function(){
    let retMsg ='Guessed ';
    this.incorrectChars.forEach((letter)=>{
        retMsg += `"${letter}",`
    })
    return retMsg;
} */