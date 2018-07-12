// For Arrow Function
//  1. start with an args list 
//  2. place a fat arrow '=>' between args.list & function body '{}'
const square = (num) => {
    return num * num;
}



// When using a function arrow you can use a short hand syntax
// remove the function body and the return key word.
const squareLong = (num) =>  num * num

console.log(squareLong(6))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Vikram',
    age: 31
},{
    name: 'Jess',
    age: 22
}]

/* const under30 = people.filter(function(person){
    return person.age < 30
})
 */

 const under30 = people.filter((person) => person.age < 30)
 console.log(under30);

 const youngest = people.find((person) => person.age === 22)
 console.log(youngest.name)