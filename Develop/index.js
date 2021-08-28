// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./README-template');

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
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github user name?',
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
        name: 'email',
        message: 'What is your email?',
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
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        title = fileName.toLowerCase().split(' ').join('');
        fs.writeFile(`./dist/${title}.md`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
// Here, I changed the name 'init' to 'promptUser', which makes more sense to me
function promptUser() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
promptUser()
    // .then(writeToFile(fileName, data))
    .then(data => {
        var template = generateTemplate(data);
        var title = data.title;
        writeToFile(title, template);
    })



