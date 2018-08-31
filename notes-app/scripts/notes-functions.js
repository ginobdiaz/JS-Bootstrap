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
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    //textEl.setAttribute('href',`/edit.html#${note.id}`);

    const statusEL = document.createElement('p');
/*    
    const button = document.createElement('button');
    // Setup the remove note button
    button.textContent = 'x'
    button.addEventListener('click', ()=>{
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })
    noteEl.appendChild(button);
*/
    // Setup the note title text
    textEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed note';
    textEl.classList.add('list-item__title')

    //do before paragraph content
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href',`/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEL.textContent = genLastEdited(note.updatedAt)
    statusEL.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEL)

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
    const notesEL = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    );
    //console.log(filteredNotes);  see if it works

    notesEL.innerHTML = '';

    if (filteredNotes.length > 0){
        filteredNotes.forEach( (note)=>{
            const noteEl = generateNoteDOM(note);
            notesEL.appendChild(noteEl);
        })
    }else{
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No Notes to Show' 
        emptyMessage.classList.add('empty-message')               
        notesEL.appendChild(emptyMessage)
    }
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
