const getDataCallback = (callback) =>{
    setTimeout(() =>{
        callback('Bad time',undefined)
//        callback(undefined, 'The time is up')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// Promise
// parameters: resolve and reject 
//             will either resolve or reject only once (one or the other).
const getDataPromise = (dat) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${dat}`)
            //reject('This is my promise error')
        }, 2000)
    })

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
})
