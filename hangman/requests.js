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

const getWord = (callback) => {
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

}