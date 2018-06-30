/*const notes = ['Note 1','Note 2','Note 3'];


notes.push('New Note 01');
console.log(notes)
console.log(notes.pop());  //the pop will return item removed
console.log(notes)

notes.shift();  //removes item from beginning
console.log(notes)
notes.unshift('New Note 00')  //adds item to beginning
console.log(notes)


const notes2 = ['Note 1','Note 2','Note 3','Note 4'];
notes2.splice(1,1);   //removes 1 item starting on
console.log(notes2);  //  index 1 or 'Note 2'

notes2.splice(1,0,'Note 1a') //inserts new item
console.log(notes2);

notes2.splice(1,1,'Note 2') //replaces new item
console.log(notes2);


notes2[notes2.length - 1] = 'Note 4b'
console.log(notes2);



//function gets call for each item in array
//call back function 
notes.forEach( function(item,index) {
   console.log(index);
   console.log(item);
});


console.log(notes);

// counting...
for (let count = 0; count <=2; count++) {
    console.log(count);
    console.log(notes[count]);
}

// returns the index position where found
// -1 means it was not found
// uses triple equals === to compare
console.log(notes.indexOf('Note 3'));
*/


const notes =[{
    title: 'My next trip',
    body: 'I would like to go to Spin'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}
]

console.log(notes.indexOf({}))
console.log(notes)
console.log('')

/*
// findIndex returns true/false
const index = notes.findIndex(function (note, index){
    console.log(note)
    return note.title=== 'Habbits to work on'
})
console.log(index)

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return notes[index];
}
const note = findNote(notes, 'office modification');
console.log(note);


const findNote = function(notes, noteTitle){
    //undefine when no match found
   //const note = notes.find(function (note, index){
  return notes.find(function (note, index){
    return note.title.toLowerCase()  === noteTitle.toLowerCase()
  });
  //return note
}
const note = findNote(notes, 'office modification');
console.log(note);



const findNotes = function(notes, query){
    //if false an empty array is  returned.
    //const filterNotes = notes.filter(function (note, index) {
    return notes.filter(function (note, index) {
        //console.log(note.title.toLowerCase())
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
        //return true;
    })

}
console.log(findNotes(notes, 'eat'));
*/

const sortNotes = function (notes) {
    //if 'a' should come first it returns -1
    //if 'b' should come first it returns 1
    //if no order happened it returns 0
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1;
        }else{
            return 0;
        }
    })
}

sortNotes(notes);
console.log(notes);

