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
//the function(e) runs when event happens.
document.querySelector('button').addEventListener('click', function(e){
    console.log('Did this work?')
    //console.log(e) helps to show attributes and methods
    // found target attribute and you can change some aspects for them
    e.target.textContent = 'OUCH! NOT THAT HARD!!!'
})
document.querySelectorAll('button')[1].addEventListener('click', function(e){
    console.log('We clicked to remove notes!')
})
*/

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log('Did this work?')
    e.target.textContent = 'OUCH! NOT THAT HARD!!!'
})
/* document.querySelector('#remove-notes').addEventListener('click', function(e){
    console.log('We clicked to remove notes!')
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
}) */

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
    // 'input' fires each time you type.
});

/* document.querySelector('#search-text').addEventListener('change', function(e) {
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
    searchText: ''
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

document.querySelector('#create-note').addEventListener('click', function(e){
    const uid = uuidv4();
    notes.push({
        id: uid,
        title: '',
        body: ''
    })
    saveNotes(notes);
    //renderNotes(notes, filters);
    location.assign('/edit.html#'.concat(uid));
    console.log(location.hash);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#for-fun').addEventListener('change', function(e){
    e.target.checked 
});

document.querySelector('#filter-by').addEventListener('change', function(e){
   console.log(e.target.value);
});
/*document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault(); //stops the form default behavior
    //dom element for the input use the name attribute to get value
    console.log(e.target.elements.firstName.value);
    //clears the input box
    e.target.elements.firstName.value = '';
});*/
