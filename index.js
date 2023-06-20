const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes.js');
const svg = require('./svg.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (Must not be more than 3 characters)',
    }, 
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo',
        choices: ['Circle', 'Square', 'Triangle'],
    }, 
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color',
    },
]

const genLogo = (fileName, svg) => {
    fs.writeFile(fileName,svg.render(), (err) => {err ? console.log(err) : console.log('Generated logo.svg')});
}


inquirer.prompt(questions).then((answers) => {
    const logo = new svg(answers)

    genLogo('./logo.svg', logo)
})