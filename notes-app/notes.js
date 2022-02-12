const fs = require('fs')
const chalk = require('chalk')
 
//Create a function to add new notes 
const addNote = (title, body) => {
  const notes = loadNotes();
  const isDuplicated = notes.find(note => note.title === title)
  
  if(isDuplicated) {
      console.log("The Note was already added. Please try a different Note")
  } else {
    notes.push({
        title,
        body
    })
    saveNotes(notes)
    console.log("New Note added")
  }
}

//Create a function to remove notes
const removeNotes = title => {
    const notes = loadNotes();
    const hasNote = notes.find(note => note.title === title)
    if(hasNote) {
        const noIncludeRemovedNote = notes.filter(note => note.title !== title)
        saveNotes(noIncludeRemovedNote)
        console.log("Note was removed")
    } else {
        console.log("Note not Found")
    }
}

// Create a function to list all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))

    for(note of notes) {
        console.log(chalk.green(note.title))
    }
}

//Create a function to save new notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

//Create a function to reading the notes

const readyNotes = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => note.title === title)
    if(!selectedNote ) {
        console.log(chalk.red.inverse.bold(`No note Found`))
    } else {
        console.log(chalk.green.inverse.bold(`Title: ${selectedNote.title}`))
        console.log(`Body: ${selectedNote.body}`)
    }
}

//Reading notes from notes.json
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer) 
    } catch (e) {
      return [] 
    }
}

module.exports = {
    addNote,
    removeNotes,
    listNotes,
    readyNotes
}; 