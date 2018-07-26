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

const getCountryInfo = (countryCode, callback) => {
    //callBack('Some fake puzzle')

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            const onenation = data.find((nation)=> nation.alpha2Code === countryCode.toUpperCase()) 
            callback(undefined, onenation);
        }else if (e.target.readyState === 4){
            callback('An error has taken place', undefined)
        }
    })
    
    request.open('GET','https://restcountries.eu/rest/v2/all')
    request.send(); 

}


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



