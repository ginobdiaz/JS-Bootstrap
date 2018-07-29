const getDataCallback = (num, callback) =>{
    setTimeout(() =>{
        //callback('Bad time',undefined)
        //callback(undefined, 'The time is up')
        if (typeof num === 'number'){
            callback(undefined, num * 2)
        }else{
            callback('A number must be provided.')
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err){
        console.log(err)
    }else{
        getDataCallback(data, (err, data)=>{
            if (err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    }
})

// Promise
// parameters: resolve and reject 
//             will either resolve or reject only once (one or the other).
/* const getDataPromise = (dat) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${dat}`)
            //reject('This is my promise error')
        }, 2000)
    })
 */
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('A number must be provided!')
    }, 2000)
})
getDataPromise(2).then((data) =>{
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) =>{
    console.log(err)
})

//When you return a promise from another promise handler 
// it's call promise chaining (a chain of '.then()'s)
// also the '.then' can return anything  not just promises
// '.catch()' is used for error handling 
getDataPromise('10').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
    //return 'this is a test'
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

/*
const myPromise = getDataPromise(123)
// obj.then - tells what to do when you actually get the data
myPromise.then((data) =>{
    console.log(data)
}, (err) => {
    console.log(err)
})
// You can access it multiple times 
// | not request data twice just doing two diff things with same information
myPromise.then((data) =>{
    console.log(data)
}, (err) => {
    console.log(err)
})*/

