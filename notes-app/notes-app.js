'use strict'

// DOM - Document Object Model

//const p = document.querySelector('p')
/* console.log(p); */
//p.remove();
/*
const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    //p.remove();
    //console.log(p.textContent)
    p.textContent = 'YEEESSS!'
})

const newPar = document.createElement('p')
newPar.textContent = 'This is a new element from JS!'
document.querySelector('body').appendChild(newPar); */

/* const notes =[{
    title: 'My next trip',
    body: 'I would like to go to Spin'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]  */
//for the localStorage stuff
let notes = getSavedNotes();

/*
//the 'click' is the event
//the (e)=> runs when event happens.
document.querySelector('button').addEventListener('click', (e)=>{
    console.log('Did this work?')
    //console.log(e) helps to show attributes and methods
    // found target attribute and you can change some aspects for them
    e.target.textContent = 'OUCH! NOT THAT HARD!!!'
})
document.querySelectorAll('button')[1].addEventListener('click', (e)=>{
    console.log('We clicked to remove notes!')
})
*/

document.querySelector('#create-note').addEventListener('click', (e)=>{
    console.log('Did this work?')
    e.target.textContent = 'OUCH! NOT THAT HARD!!!'
})
/* document.querySelector('#remove-notes').addEventListener('click', (e)=>{
    console.log('We clicked to remove notes!')
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
}) */

document.querySelector('#search-text').addEventListener('input', (e)=> {
    console.log(e.target.value)
    // 'input' fires each time you type.
});

/* document.querySelector('#search-text').addEventListener('change', (e)=> {
    console.log(e.target.value)
    //happens only when you lose focus
}); */

//--Single--
// p  - tag = Dom element 
//#replace - id
//.item - class

//--Multiple-- tags must come first
// p#order  (tag + id)
// button.inventory  (tag + class)
// h1#title.application (tag + id + class)
// h1.application#title (tag + class + id)

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

//localStorage.setItem('location', 'Riverside');
//to readback localStorage .getItem
//console.log(localStorage.getItem('location'));
//to delete localStorage items.
//localStorage.removeItem('location')

//clear will remove ALL data regardless of key values
//localStorage.clear();

//Stores object to JSON string
/* const user = {
     name: 'Gino',
     age: 57
}
const userJSON= JSON.stringify(user);
console.log(userJSON)
localStorage.setItem('user', userJSON);
 */

//Read JSON string to object
/* const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age} years old!`)
 */





renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e)=>{
    const uid = uuidv4();
    const createTimeStamp = moment().valueOf();
    notes.push({
        id: uid,
        title: '',
        body: '',
        createdAt: createTimeStamp,
        updatedAt: createTimeStamp
    })
    saveNotes(notes);
    //renderNotes(notes, filters);
    location.assign('/edit.html#'.concat(uid));
    console.log(location.hash);
});

document.querySelector('#search-text').addEventListener('input', (e)=> {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#for-fun').addEventListener('change', (e)=>{
    e.target.checked 
});

document.querySelector('#filter-by').addEventListener('change', (e)=>{
   //console.log(e.target.value);
   filters.sortBy = e.target.value;
   renderNotes(notes, filters);
});
/*document.querySelector('#name-form').addEventListener('submit', (e)=>{
    e.preventDefault(); //stops the form default behavior
    //dom element for the input use the name attribute to get value
    console.log(e.target.elements.firstName.value);
    //clears the input box
    e.target.elements.firstName.value = '';
});*/

window.addEventListener('storage', (e) => {
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes,filters); 
/*        const note = notes.find(function (note) {
            return note.id === noteID
        })
        if (note === undefined) {
            location.assign('/index.html')
        }


        titleElement.value = note.title;
        bodyElement.value = note.body;*/        
    }
});

/*

// Unix Epoch = January 1, 1970 00:00:00
// represented as number where 0 = Unix Epoch
// positive is from that time foward
// negative is going backawrd from UE -60000 is 1 min in millisecond 
// now.getTime() gives you a timestamp.
console.log(new Date().getTime())
//const now = new Date();
const now = new Date('August 18, 1991 08:18:00');
console.log(now.toString());

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate.getFullYear())

//1. create two dates in the past
//2. Get timestamp for both
//3. Sort which is first and print its time (use toString)
const dt01 = new Date('1962-06-26 11:15:00')
const dt02 = new Date('2018-06-26 10:30:00')
console.log(dt01.getTime());
console.log(dt02.getTime());
const olderDt = (dt01.getTime() > dt02.getTime()) ? dt02.toString() : dt01.toString();
console.log(`This date ${olderDt} is older than the other.`   )
*/

/*
//Now let's use the moment lib
const now = moment();
console.log(now.toString())

//now.minute(16);  //replaces the minute section
now.add(1, 'year').subtract(20,'days');
console.log(now.toString())

console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())

const nowTimeStamp = now.valueOf();
console.log(moment(nowTimeStamp).toString());
*/
/*
//BDay moment
const bday = moment();

bday.year(1960);
bday.month("Aug");
bday.set('date',18);
console.log(bday.format('dddd, MMM D, YYYY'))
*/