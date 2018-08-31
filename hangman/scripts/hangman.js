'use strict'
//Create a method for making a guess.
// 1. Should accept a char for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match
class Hangman {
    constructor(theWord, numGuesses){
        this.TheWord = theWord;
        this.word = theWord.replace(/[^a-zA-Z]/g, "").toLowerCase();
        this.guessesAllowed = numGuesses;    
        this.incorrectChars = [];
        this.correctChars = [];
        this.currentGuess = '';
        this.GameMessage = 'Please, make a guess.';
        this.GameStatus = 'My Hangman'

    }
    guessCharacter(letterGuess){
        if (typeof letterGuess === 'string'){
            this.CurrentGuess = letterGuess[0].toLowerCase();
        }else{
            this.GameMessage = 'You must pass a valid alpha char'
            return
        }
        if (!this.guessesAllowed){
            this.GameMessage = `The word was ${this.TheWord}`
            this.GameStatus = 'Sorry you lose. You reached your maximum guesses.'
            return
        }else if (this.incorrectChars.includes(this.CurrentGuess) || this.correctChars.includes(this.CurrentGuess)){
            this.GameMessage = `You already guessed '${this.CurrentGuess}'.`;
            return

        }else{
            this.GameMessage = `Your guess: '${this.CurrentGuess}'`
        }
    
        if (this.word.includes(this.CurrentGuess)){
            this.correctChars.push(this.CurrentGuess)
            const sortWord = this.word.split('').sort().filter((item, pos, ary) => !pos || item != ary[pos - 1]).join('');
            if (this.guessesAllowed === 0){
                this.GameMessage += ` is NOT correct. The word was ${this.TheWord}`
                this.GameStatus = 'Sorry, you lose. You reached your maximum guesses.'
            }else{
                this.GameMessage +=  ` is correct.`
                this.GameStatus = (this.correctChars.sort().join('').toString() === sortWord) ? 'WINNER, WINNER, CHICKEN DINNER!!!' : `You have ${this.guessesAllowed} guesses remaining.`
            }
        }else{
                this.incorrectChars.push(this.CurrentGuess);
                this.GameMessage +=  ` is NOT correct.`
                this.guessesAllowed-- 
                if (this.guessesAllowed <= 0) {
                    this.GameMessage += ` The word was ${this.TheWord}.` 
                    this.GameStatus =  'Sorry, you lose. You reached your maximum guesses.' 
                    
                }else{
                    this.GameStatus =`You have ${this.guessesAllowed} guesses remaining.`
                }
        }
    
        
    }    
 /*    checkForGameEnd(){
        let retVal = true; 
        if (!this.currentGuess){
            guessMsg = 'Please, make a guess.'
        }else{
            guessMsg = `Your guess: '${this.currentGuess}'`
            if (this.guessesAllowed === 0){
                guessMsg += ' is NOT correct<br\>Sorry you lose because you reached your maximum guesses.'
            }else{
                guessMsg +=  `is correct<br\>You have ${this.guessesAllowed} guesses remaining.`
            }
        }
        return retVal;
    } */
    get theWordMasked(){
        //return this.word.replace(/./g, '*'); //regex to loop through the word.   
        return this.TheWord.replace(/[^\s\\]/g, '*') 
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
        this.TheWord.split('').forEach((letter)=>{
/*             if (this.correctChars.includes(letter)){
                retMsg += `${letter}`
            }else{
                retMsg += letter.replace(/[^\s\\]/,'*')   //(letter === ' ') ? letter : '*'
            } */
            
            //Match to lowercases chars only
            retMsg += (this.correctChars.includes(letter.toLowerCase()) || /[\s\\]/.test(letter)) ? letter : '*'
        })    
        return retMsg;
    }
    get GameStatus(){
        return this._GameStatus
    }
    set GameStatus(value){
        this._GameStatus = value
    }
    get GameMessage(){
        return this._GameMessage
    }
    set GameMessage(value){
        this._GameMessage = value
    }
    get TheWord(){
        return this._TheWord
    }
    set TheWord(value){
        this._TheWord = value
    }
    get CurrentGuess(){
        return this._CurrentGuess
    }
    set CurrentGuess(value){
        this._CurrentGuess = value
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