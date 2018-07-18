// product --> Object.prototype --> null
// from console
//   product.__proto__              <--get Object {}
//   product.__proto__.__proto__    <--get null
/*const product = {
    name: 'Influence'
}
// hasOwnProperty
console.log(product.hasOwnPropery())
*/

// Primitive values: string*, number*, boolean*, null & undefined
//  these values are not objects.
//  * - have an object wrapper: when a property or method are used 
//      then the primitive types are converted to an object.
//     const otherProp = new String('Phone')
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// const team = new Array(['Luke','Maddison'])
//const team = ['Luke','Maddison']
//console.log(team);
//console.log(team.hasOwnProperty('filter'))

// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoo --> Boolean.prototype --> Object.prototype --> null



//const h1 = new hangman('spinach', 10);
const h2 = new hangman('fatty', 5);
/*console.log(h2.guessCharacter('e'));
console.log(h2.guessCharacter('r'));
console.log(h2.guessCharacter('t'));
console.log(h2.guessCharacter('r'));
console.log(h2.guessCharacter('g'));
console.log(h2.getPuzzle())
*///console.log(h1)
//console.log(h2)
//DOM Elements
const theWord = document.querySelector('#theWord');
//Events
document.addEventListener('DOMContentLoaded', function (e){
    theWord.innerHTML = h2.theWord();
})
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    //console.log(h2.guessCharacter(guess))
    console.log(h2.getPuzzle());
    document.querySelector('#theMessage').innerHTML = h2.guessCharacter(guess)
    theWord.innerHTML = h2.getPuzzle()
    document.querySelector('#theStatus').innerHTML = h2.getGuesses()

});