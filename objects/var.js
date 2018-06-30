var firstName = 'Gino';

firstName = 'Dude';

console.log(firstName)

var firstName = 'Jen'   //let or const will not allow this!!!

console.log(firstName);

// var is function scope not block scope
// like it within the if block
if (10 === 10){
    var firstDog = 'Bubbie';
    let secondDog = 'Phoebe';

} 

console.log(firstDog);
//console.log(secondDog);  //bad

const setName = function(){
    var thirdDog = 'Buddy';
}
//console.log(thirdDog);   //bad 

console.log(age);
var age = 10;                 //this assignment is moved up.

console.log(age2);
let age2 = 20;