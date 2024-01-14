const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with README.md file default structure
// 2. Decide which questions you want to ask and the question format (input, select, dropdown etc.)
// 3. Generate the README.md content based on the user input
// 4. Write to README.md file

// array of questions for user
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "OSL 3.0", "MS PL", "None"]
    },
    {
        type: "input",
        name: "userContribution",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        })
}

// function call to initialize program
init();
