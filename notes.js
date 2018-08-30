const fs = require('fs');
console.log("notes file printing!!");
//module.exports.age=33;
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);

  }catch(e){

  }
};
var saveNotes = (notes) => {
fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  var notes = []
  var note = {
    title,
    body
  };


var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(note);
  };
};

var getAll = () => {
console.log('getting all notes')
};
var readAll = () => {
  console.log('reading all notes');
};
var removeNote = (title) => {
  console.log('removing note',title);
};
 module.exports = {
   addNote,
   getAll,
   readAll,
   removeNote
 };
