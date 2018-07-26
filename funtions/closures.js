//closures - combination of a function with the lexical scope 
//           in which it was defined 'printMessage'
/* const myFun = () => {
    const message = 'This is my message'
    //This function is not executed until 'myFun'
    const printMessage = () => console.log(message)

    return printMessage
}

const myPrintMessage = myFun()
//This cannot be called until after myFun has returned
myPrintMessage(); */


const createCounter = ()=>{
    let count = 0;

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) =>{
    return (b) =>{
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100);
console.log(add100(-90))
console.log(add100(10))


// Tipper
// 1. Create createTipper which takes in the base tib (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few different tips.
// 4. Use the generated functions to calculate tips and print them.

const createTipper = (pct) =>{
    return (tot) =>{
        return tot * pct
    }
}

const tip15 = createTipper(.15);
console.log(tip15(100));
const tip20 = createTipper(.2)
console.log(tip20(100))