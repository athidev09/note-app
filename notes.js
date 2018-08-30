console.log("notes file printing!!");
//module.exports.age=33;
 var addNote = (title,body) => {
  console.log("adding  notes",title,body);
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
