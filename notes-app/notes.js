const fs = require('fs')
const getNotes = () => {
    return 'Your notes...'
}


//Create a function to add new notes
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title)
  
  if(duplicateNotes.length === 0) {
    notes.push({
        title,
        body
    })
      saveNotes(notes)
      console.log("New Note added")
  } else {
      console.log("The Note was already added. Please try a different Note")
  }
}

//Create a function to remove notes

const removeNotes = title => {
    let notes = loadNotes();
    const noIncludeRemovedNote = notes.filter(note => note.title !== title
    )
    if(notes.length === 1) {
        notes = []
        saveNotes(notes)
        console.log("Note was removed")
    } else if(noIncludeRemovedNote.length === 0) {
        console.log("Note its not found")
    } else {
        saveNotes(noIncludeRemovedNote)
        console.log("Note was removed")
    }
}

//Create a function to save new notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
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

// Remove Function

module.exports = {
    getNotes,
    addNote,
    removeNotes
}; 