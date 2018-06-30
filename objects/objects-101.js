//to create a obj you just assign curly braces
letmyBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}   

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

//Challenge area
//name, age, location

let person = {
    name: 'Cendo',
    age: 27,
    location: 'West Covina'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
person.age = person.age + 10;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
