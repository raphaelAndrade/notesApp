const chalk = require("chalk")
const yargs = require("yargs")
const notes = require('./notes.js')

// Customize yargs version

yargs.version('1.1.0')

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
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


yargs.parse() 

