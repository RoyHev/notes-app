const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue("List of all your notes titles."))
    notes.forEach((note) => console.log(chalk.yellow(note.title)))
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)
    if (notes.length === duplicateNotes.length) {
        console.log(chalk.bgRed.bold("Note with title doesn't exist"))
    } else {
        console.log(chalk.bgGreen.bold("Note removed!"))
        saveNotes(duplicateNotes)
    }
}
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    debugger
    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteRead = notes.find((note) => note.title === title)
    if (noteRead) {
        console.log(chalk.green(noteRead.title))
        console.log(noteRead.body)
    } else {
        console.log(chalk.red("Unable to find note"))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}