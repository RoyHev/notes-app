const fs = require('fs')
// const book = {
//     title: "Ego is the enemy",
//     authour: "whoever"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataBuffer.toString())
// console.log(data.title)

const buffer = fs.readFileSync('1-json.json')
const data = JSON.parse(buffer.toString())
data.name = "Roy"
data.age = "28"
const toWrite = JSON.stringify(data)
fs.writeFileSync('1-json.json', toWrite)
