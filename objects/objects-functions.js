let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}   

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}   

let getSummary = function(book){
    //console.log(`${book.title} by ${book.author}`);
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

//getSummary(myBook);
//getSummary(otherBook);

let bookSummary = getSummary(myBook);
console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

let bookSummary2 = getSummary(otherBook);
console.log(bookSummary2.summary);
console.log(bookSummary2.pageCountSummary);


let convertTemp = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9
    }
}

console.log(convertTemp(32));