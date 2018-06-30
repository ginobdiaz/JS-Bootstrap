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

const notes =[{
    title: 'My next trip',
    body: 'I would like to go to Spin'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]
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

const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter( function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });
    //console.log(filteredNotes);  see if it works

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#for-fun').addEventListener('change', function(e){
    e.target.checked 
});
/*document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault(); //stops the form default behavior
    //dom element for the input use the name attribute to get value
    console.log(e.target.elements.firstName.value);
    //clears the input box
    e.target.elements.firstName.value = '';
});*/
