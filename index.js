// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import {generateMarkdown} from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your application??",
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the contribution guidelines?",
        },
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions?",
        },
        {
            type: "input",
            name: "imageAlt",
            message: "What is the imageAlt?"
        },
        {
            type: "input",
            name: "imageUrl",
            message: "What is the image URL?"
        },
        {
            type: "list",
            name: "license",
            message: "What is the license?",
            choices: [
                {name: "Apache"},
                {name: "GNU"},
                {name: "MIT"},
                {name: "None"},
            ]
        },
        {
            type: "input",
            name: "githubUsername",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },

    ]).then((response) => {
        fs.writeFile('generatedREADME.md', generateMarkdown(response), (err) => {
            if (err)
              console.log(err);
            else {
                console.log('README generated')
            }
        })
    })
}

// Function call to initialize app
init();
  