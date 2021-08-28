// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give some installation details:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should one use this application?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license would you like to use?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What contribution guidelines should there be?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any instructions on how to run your tests (if any).',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Invalid entry!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// Here, I changed the name 'init' to 'promptUser', which makes more sense to me
function promptUser() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
promptUser()
    // .then(writeToFile(fileName, data))
    .then( data => {
        console.log(data);
    });
