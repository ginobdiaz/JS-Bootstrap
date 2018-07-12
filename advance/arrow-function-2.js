// arrow functions can't use the arguments 
const add = function (a, b){
    //console.log(arguments)
    return arguments[0] + arguments[2]
}

console.log(add(11,22,33,44))

/* can use 'this' key word to reference
// 
const car = {
    color: 'Red',
    getSummary: function(){
        return `The care is ${this.color}`
    }
}
console.log(car.getSummary())
*/
const car2 = {
    color: 'Red',
    getSummary() {
        return `The care is ${this.color}`  // the this should be good. notice no colon.
    }
}
console.log(car2.getSummary())

const car = {
    color: 'Red',
    getSummary: () => {
        return `The care is ${this.color}`  // the this will be undefined
    }
}
console.log(car.getSummary())
