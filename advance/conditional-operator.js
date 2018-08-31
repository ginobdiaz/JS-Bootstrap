/* const myAge = 7
const message = (myAge >= 18) ? 'You can vote!' : 'You cannot vote.'
console.log(message); */


const myAge=57;
const showPage = () =>{
    console.log('Showing the page');
}
const showErrorPage = () =>{
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage();

//Practice with Regex
const theWord = 'Gino Diaz'
console.log(theWord.replace(/./g, '*'));
//let maskWord = theWord.replace(/\s/g, ' '));
const maskWord = theWord.replace(/[^\s\\]/g, '*');
console.log(maskWord);
const miniWord = theWord.replace(/[^a-zA-Z]/g, "")
console.log(miniWord);

 const guessesAllowed = 0
 let gm = 'The word'
 gm +=  (guessesAllowed <= 0) ? ` The word was WHAT` : ' Keep going'
// gm += ' is NOT correct.' + (guessesAllowed <= 0) ? ` The word was WHAT` : ' Keep going'
 console.log(gm)