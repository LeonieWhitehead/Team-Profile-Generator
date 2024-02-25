const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an empty array to store team members
const team = [];

//Object of roles for user to choose from when adding a new member and prompt questions 
const roles = {
  Manager: {
    questions: [
      {
        type: 'input',
        name: 'name',
        message: "What's the manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the manager's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?",
      },
    ],
    constructor: Manager,
  },
  Engineer: {
    questions: [
      {
        type: 'input',
        name: 'name',
        message: "What's the engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the engineer's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the engineer's email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What's the engineer's GitHub username?",
      },
    ],
    constructor: Engineer,
  },
  Intern: {
    questions: [
      {
        type: 'input',
        name: 'name',
        message: "What's the intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the intern's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the intern's email?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What's the intern's school?",
      },
    ],
    constructor: Intern,
  },
};

//  Function to create a new employee based on user input and add it to team array.
const addEmployee = (role) => {
  const { questions, constructor } = roles[role];
  inquirer.prompt(questions).then((answers) => {
    // const employee = new constructor(answers.name, answers.id, answers.email, answers.roleSpecific);
    // team.push(employee);
    // const nextRole = Object.keys(roles).find((r) => r !== role);
    // if (nextRole) {
    //   addEmployee(nextRole);
    // } else {
    //   const html = generateTeam(team);
    //   writeFile(outputPath, html)
    //     .then(() => console.log('Successfully wrote to team.html'))
    //     .catch((err) => console.error(err));
    // }
  });
};

const init = () => {
  addEmployee('Manager');
};

init();