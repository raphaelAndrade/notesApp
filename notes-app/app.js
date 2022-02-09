const validador = require('validator')
const getNotes = require('./notes.js')

const newNotes = getNotes();

console.log(newNotes);

console.log(validador.isURL('andre@gmail'))
