const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataJSON = fs.readFileSync('1-json.json').toString()
const user = JSON.parse(dataJSON);
// My solution in this case I need to define the variable as let because I will reasigner the interal object
// data = {
//     name: "Raphael Lindao",
//     planet: "Earth",
//     age: 36
// }
user.name = "Raphael lindo gostoso"
user.age = 36
const dataStringJson = JSON.stringify(user)
fs.writeFileSync('1-json.json', dataStringJson)

