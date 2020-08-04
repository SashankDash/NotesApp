
const validator = require('validator')
//import validator from 'validator';
const getNotes = require('./notes.js')
const chalk = require('chalk');

const msg = getNotes()

console.log(chalk.white.bgRed.bold(msg))

console.log(validator.isEmail('andrew@email.com'))

console.log(validator.isURL('https://google.in'))
