console.log('Starting app');
 // const fs = require('fs');
 const _ = require('lodash');
 const os = require('os');
 const yargs = require('yargs');
 const notes = require('./notes');
const argv = yargs.argv;
 var command = process.argv[2];
 console.log('Command:',command);
console.log('Yargs',argv);



if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
    if(note){
      console.log('notes created');
      notes.logNote(note);
    }else{
      console.log('Note title taken');
    };
}else if (command === "list") {
  notes.getAll();
}else if (command === "read") {
  // notes.readAll(argv.title);
}else if (command === "remove") {
  notes.removeNote(argv.title);
}else {
  console.log("I do not recognize the command");
};
