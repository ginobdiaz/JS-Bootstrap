// Check for existing saved data
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null){
        return JSON.parse(notesJSON);
    }else{
        return [];
    }
}

// Generate the DOM structure for notes
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p');
    if (note.title.length > 0){
        noteEl.textContent = note.title;
    }else{
        noteEl.textContent= 'Unnamed note'
    }

    return noteEl;
}

// Render the notes to the page
const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter( function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });
    //console.log(filteredNotes);  see if it works

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note){
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}

// Saving notes one note at a time
const saveNotes =  function(notes){
    localStorage.setItem('notes',JSON.stringify(notes));

}
