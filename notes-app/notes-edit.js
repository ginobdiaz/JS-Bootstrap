// 1. Add a DOM element between the title and body inputs (empty span)
// 2. Set text value:(ie, last edited 4 hours ago)
// 3. Update value on title/body/storage change

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body')
const updateElement = document.querySelector('#edit-date')
const noteID = location.hash.substring(1);
let notes = getSavedNotes();
const note = notes.find((note)=>note.id === noteID);


if (note === undefined){
    location.assign('/index.html')
}

updateElement.textContent = genLastEdited(note.updatedAt);
titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', (e)=>{
//    note.title = document.querySelector('#note-title').value;
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    updateElement.textContent = genLastEdited(note.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', (e)=>{
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    updateElement.textContent = genLastEdited(note.updatedAt);
    saveNotes(notes);
})

document.querySelector('#remove-note').addEventListener('click', (e)=>{
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', (e)=>{
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        const note = notes.find(function (note) {
            return note.id === noteID
        })


        if (note === undefined) {
            location.assign('/index.html')
        }

        updateElement.textContent = genLastEdited(note.updatedAt);
        titleElement.value = note.title;
        bodyElement.value = note.body;
        
    }
});