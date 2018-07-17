//Type Coercion happens for a string, a number & a boolean 
console.log('5' + 5); //does a string concat because of a '+' contates a string

console.log('5' - 5); //since no string operates on a '-' it uses a number.

//single equals - = - to set a value
//double equals - == - to checks for equality but does not take Type into account.
//trible equals - === - to check for equality
const oneequal = 5;
console.log(5 == 5);
console.log('5' == 5); //hardly used for comparisons
console.log('triple equals')
console.log(5 === 5);
console.log('5' === 5);

console.log(typeof 123);

const value = false + 12;
const type = typeof value
console.log(type);
console.log(value);