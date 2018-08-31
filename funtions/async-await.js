// the 'async' will create an asynchronous function
// async functions ALWAYS returns a Promise which is resolve by the return value of async function.
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('A number must be provided!')
    }, 2000)
})

const processData = async () => {
    //throw new Error('What\'s wrong')
    //return 12
    let data = await getDataPromise(2)
    //promise chaining going on here:
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    //the 'await' when it's not resolved will throw an error
    //console.log(data)
    return data
}

//console.log(processData())

processData().then((data)=>{
    console.log('Data', data)       //<<< passing multiple params to console it will log them in order.
}).catch((error) => {
    console.log('Error',error)
})