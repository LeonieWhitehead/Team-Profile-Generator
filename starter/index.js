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

//Function to add a new member to the team
const addEmployee = (employeeType) => {
  switch (employeeType) {
    case 'Engineer':
      return inquirer.prompt([
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
      ])
