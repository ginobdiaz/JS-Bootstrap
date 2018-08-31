/*const getPuzzle = (callback) => {
    //callBack('Some fake puzzle')

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        }else if (e.target.readyState === 4){
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3')
    request.send(); 

}*/

/*const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send(); 

})*/

/* const getWord = (callback) => {
    const request = new XMLHttpRequest();

    request.overrideMimeType("application/json");

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.words);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
        
    });

    request.open('GET','myWords.json',true)
    request.send()

} */

/*
// With CallBack functions
const getCountryInfo = (countryCode, callback) => {
    //callBack('Some fake puzzle')

    const reqCountry = new XMLHttpRequest();

    reqCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            const onenation = data.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()) 
            callback(undefined, onenation);
        }else if (e.target.readyState === 4){
            callback('An error has taken place', undefined)
        }
    })
    
    reqCountry.open('GET','https://restcountries.eu/rest/v2/all')
    reqCountry.send(); 
}*/

//With Promises
const getPuzzle = async (wordCount)=>{
    const response = await  fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleOld = (wordCount)=>{
    // the return, returns a promise
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if (response.status === 200){
            return response.json()
        }else{
            throw new Error('Failed to Fetch!')
        }
    }).then((data)=>{    //<<<this 'then' runs once the return response.json() gets resolved
        return data.puzzle
    })
}

/*
const getCountryInfo = (countryCode)=>{
    return fetch('https://restcountries.eu/rest/v2/all').then((response)=>{
        if (response.status === 200){
            return response.json()
        }else{
            throw new Error('Failed to Fetch a country')
        }
    }).then((countries)=> countries.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()))

    //  or do it this way>>>   }).then((countries)=>{
    //    return countries.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()) 
    //})

}*/

/*
const getCountryInfo = (countryCode) => new Promise((resolve, reject)=> {
    const reqCountry = new XMLHttpRequest();

    reqCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            const onenation = data.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()) 
            resolve(onenation);
        }else if (e.target.readyState === 4){
            reject('An error has taken place')
        }
    })
    
    reqCountry.open('GET','https://restcountries.eu/rest/v2/all')
    reqCountry.send();     
})*/
/* const getPuzzleSync = () => {
    const request = new XMLHttpRequest();
    request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3',false)
    request.send()

        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            return data.puzzle
        } else if (request.readyState === 4) {
            throw new Error('An error has taken place')
        }
} */

// 1. Convert getCountryInfo to an async function that uses await
// 2. Convert getLocation to an async function that uses await
/*const getCountryInfo = (countryCode)=>{
    return fetch('https://restcountries.eu/rest/v2/all').then((response)=>{
        if (response.status === 200){
            return response.json()
        }else{
            throw new Error('Failed to Fetch a country')
        }
    }).then((countries)=> countries.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()))
}
// ipinfo.io/json?token=05602ce1f62587
const getLocation = (token) => {
    return fetch(`http://ipinfo.io/json?toksen=${token}`).then((response) =>{
        if (response.status === 200){
            return response.json()
        }else{
            throw new Error('Couldn\'t get to ipinfo.io')
        }
    })
}

const getCountryFromIP = (token) => { 
    return getLocation(token).then((data)=>{
        return getCountryInfo(data.country)
    }).catch((err) => {
        //console.log(err)
        throw new Error('Couldn\'t get country name.')
    })
}

*/

const getCountryInfo = async (countryCode)=>  {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    
    if (response.status === 200){
        const countries = await response.json()
        return countries.find((nation)=> nation.alpha2Code === countryCode.toUpperCase())
    }else{
        throw new Error('Failed to Fetch a country')
    }
    
}
// ipinfo.io/json?token=05602ce1f62587
const getLocation = async () => {
    const response = await  fetch(`http://ipinfo.io/json?token=05602ce1f62587`)

    if (response.status === 200){
        const loc = await response.json()
        return loc
    }else{
        throw new Error('Couldn\'t get to ipinfo.io')
    }
    
}

/*
// Create a new function called getCurrentCountry
// Should return a promise that resolves the country object for your current location
// Use async/await for the new function
const getCurrentCountry = async () => {
    const data = await getLocation()
    const country = await getCountryInfo(data.country)
    //return the country name
    return country.name
}*/
