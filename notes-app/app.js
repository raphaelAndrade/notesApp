const chalk = require("chalk");
const getNotes = require('./notes.js')

// const newNotes = getNotes();

// console.log(chalk.red(newNotes));

// console.log(process.argv[2])

const command = process.argv[2]

console.log(process.argv)

if(command === 'add'){
    console.log("adding nodes")
} else if (command === "remove"){
    console.log("Removing notes")
}

