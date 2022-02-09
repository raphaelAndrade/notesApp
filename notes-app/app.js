const chalk = require("chalk");
const getNotes = require('./notes.js')

const newNotes = getNotes();

console.log(chalk.blue(newNotes));


