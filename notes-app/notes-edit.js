const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body')
const noteID = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
    return note.id === noteID
})


if (note === undefined){
    location.assign('/index.html')
}


titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(e){
//    note.title = document.querySelector('#note-title').value;
    note.title = e.target.value;
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value;
    saveNotes(notes);
})

document.querySelector('#remove-note').addEventListener('click', function(){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})
