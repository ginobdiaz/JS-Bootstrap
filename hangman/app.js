// Prototypal Inheritance
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

// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do.
// Response - what was actually done.

//const h1 = new hangman('spinach', 10);
//const h2 = new Hangman('bat boy', 5);
/*
const idx = 0;
getWord((error, words) => {
    if (error){
        console.log(`Error: ${error}`)
    } else {
        idx = getRanIndex(words.length)
        console.log(words[idx])
    }
})
const h2 = new hangman(words[idx], 5); 
*/
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
/*document.addEventListener('DOMContentLoaded', function (e){
    theWord.innerHTML = h2.theWord();
})*/
window.addEventListener('keypress',  (e) => {
    const guess = String.fromCharCode(e.charCode);
    //console.log(h2.guessCharacter(guess))
    console.log(h2.Puzzle);
    document.querySelector('#theMessage').innerHTML = h2.guessCharacter(guess)
    theWord.innerHTML = h2.Puzzle
    document.querySelector('#theStatus').innerHTML = h2.Guesses

});

const getRanIndex = (maxNum) => Math.floor(Math.random() * (maxNum - 0)) 

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})
/*
//passes two functions, 1 when request is resolve and 2nd if request is rejected
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) =>{
    console.log(`Error: ${err}`)
})*/
/*
getPuzzle((error, puzzle) => {
    if (error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
    
})

//const puzzle = getPuzzleSync()
console.log(puzzle)

console.log('Do something else!')
*/


/*
//const h2 = new Hangman('bat boy', 5);
// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }else if (e.target.readyState === 4){
        console.log('An error has taken place')
    }
})

request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3')
request.send(); 
*/

/*
// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code and the callback function
// 3. Make a HTTP request and call the callback with country information
// 4. Use the callback to print the country name.
const countryCode = "ch"
getCountryInfo(countryCode, (error, country) => {
    if (error){
        console.log(`Error: ${error}`)
    }else{
        console.log(country)
    }
    
})*/

// 1. Convert getCountry to use 'fetch' and return a 'promise'
// 2. Make sure getCountry still resolves with the country that matches
// 3. Change error to use 'catch'
getCountryInfo('ar').then((country) => {
    console.log(country)   
}).catch((error)=>{
    console.log(`ERROR: ${error}`)
})
/*
// 1. Convert getCountry to return a new promise
// 2. Call getCountry to print country name or error.
getCountryInfo('pm').then((country) => {
    console.log(country)
}, (error) =>{
    console.log(error)
})*/


/*
const req = new XMLHttpRequest();
req.addEventListener('readystatechange', (e) => {
    if (e.target.readyState == 4 && e.target.status === 200){
        const nations = JSON.parse(e.target.responseText);
        const onenation = nations.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()) 
        console.log(onenation.name)
    }else if (e.target.readyState === 4){
        console.log('An error has taken place')
    }
})


req.open('GET','https://restcountries.eu/rest/v2/all')
req.send();*/

/*
//When fetch returns you can get a 'Promise' to do something for 
//  our request. The fetch will only return when the readystate is ready.
fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
    if (response.status === 200){
        return response.json()
    }else{      //<<<for rejections
        throw new Error('Unable to fetch the puzzle')   //<<<the 'throw' will make 'catch' work.
    }
}).then((data)=>{
    console.log(data.puzzle)
}).catch((error)=>{
    console.log(error)
})*/

// 1. Create getLocation function which takes no request
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region and country information
getLocation('05602ce1f62587').then((locdata)=>{
    console.log(`City: ${locdata.city}`);
    console.log(`Region: ${locdata.region}`);
    console.log(`Country: ${locdata.country}`);
}).catch((error)=>{
    console.log(`Error: ${error}`)
})

getCountryFromIP('05602ce1f62587').then((country) => {
    console.log(`This IP found in this country: ${country}`)
}).catch((error)=>{
    console.log(`Error: ${error}`)
})