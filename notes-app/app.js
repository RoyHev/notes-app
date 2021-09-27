const validator = require('validator')
const chalk = require('chalk')
const notes = require("./notes.js")
const yargs = require('yargs')

yargs.version('1.1.0')

//add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note content",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)

    }
    
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Delete an existing note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes..',
    handler(){
        notes.getNotes()
    }
})

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Reading a note.',
    builder:{
        title: {
            demandOption: true,
            describe: "Note title",
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
// console.log(yargs.argv)
yargs.parse()