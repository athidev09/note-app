  /*var obj = {
    names: "James Bond"
  };
  var stringObj = JSON.stringify(obj);
  console.log(typeof stringObj);
  console.log(stringObj);*/

  /*var personString = '{"name":"James","age":"55"}';
  var person = JSON.parse(personString);
  console.log(typeof person);
  console.log(person); */

   const fs = require('fs');

    var orginalNote = {
      title:'Some title',
      body:'Some body'
    };

    var originalNoteString = JSON.stringify(orginalNote);
    fs.writeFileSync('notes.json',originalNoteString);

    var noteString = fs.readFileSync('notes.json');
    //note
    var note = JSON.parse(noteString);
    console.log(typeof note);
    console.log(note.title);
