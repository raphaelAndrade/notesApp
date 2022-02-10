const chalk = require("chalk")
const yargs = require("yargs")
const getNotes = require('./notes.js')

// Customize yargs version

yargs.version('1.1.0')

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => console.log('adding a new note!')
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: () => console.log('removing a new note!')
})

// Create read command

yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: () => console.log('reading a new note!')
})


// Create list command 

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: () => console.log('listing all the notes!')
})
// add, remove, read, list

console.log(yargs.argv)

