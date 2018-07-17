//console.log(uuidv4())
'use strict'  //basically must define variables.

let data;
const processData = () =>{
    data = '12382932345'; // missing let or const leaked variable - creates a global
}
processData();
console.log(data)


// Check for existing saved data
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try{
        return (notesJSON) ? JSON.parse(notesJSON) : [];
    }catch (e){
        return []
    }


//    return (notesJSON !== null) ? JSON.parse(notesJSON) : [];
}

// Generate the DOM structure for notes
const generateNoteDOM = (note)=>{
    /* const noteEl = document.createElement('p'); */
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    textEl.setAttribute('href',`/edit.html#${note.id}`);
    const button = document.createElement('button');
    // Setup the remove note button
    button.textContent = 'x'
    button.addEventListener('click', ()=>{
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })
    noteEl.appendChild(button);
    // Setup the note title text
    textEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed note';

    //do before paragraph content
    noteEl.appendChild(textEl);

    return noteEl;
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited'){
        return notes.sort((a, b) =>{
            if (a.updatedAt > b.updatedAt){
                return -1;
            }else if (a.updatedAt < b.updatedAt) {
                return 1;
            }else { return 0;}
        })
    }else if (sortBy === 'byCreated') { 
        return notes.sort((a, b) =>{
            if (a.createdAt > b.createdAt){
                return -1;
            }else if (a.createdAt < b.createdAt){
                return 1;
            }else {return 0;}
        })

    }else if (sortBy === 'byAlpha'){
         return notes.sort((a,b) =>{
             if (a.title.toLowerCase() < b.title.toLowerCase()){
                 return -1;
             } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                 return 1;
             } else {return 0}
         });
    }else{ return notes;}
}

// Render the notes to the page
const renderNotes = (notes, filters)=>{
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    );
    //console.log(filteredNotes);  see if it works

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach( (note)=>{
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}

// Remove a note from list and storage
const removeNote = (id)=>{
    const noteIndex = notes.findIndex((note) => note.id === id);
    //note exists so chuck it
    if (noteIndex > -1){
        notes.splice(noteIndex, 1);
    }
}

// Saving notes one note at a time
const saveNotes =  (notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes));

}

// When edited ?
const genLastEdited = (timestamp)=> `Last edited ${moment(timestamp).fromNow()}`
