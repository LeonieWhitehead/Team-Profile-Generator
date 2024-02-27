# Team-Profile-Generator

## Description

The Team Profile Generator is a command-line application built with Node.js that allows a manager to create a webpage displaying information about their software engineering team. The generated webpage includes details about each team member, such as their name, employee ID, email, and role-specific information.

## Features

- **Role-specific Information**: Supports different roles including Manager, Engineer, and Intern, each with role-specific details.
- **User Input**: Utilises the Inquirer npm package to gather user input for team member details.
- **HTML Generation**: Dynamically generates an HTML webpage based on the provided team information.
- **File Output**: Writes the generated HTML to a file (`team.html`) in the `output` folder.

## Installation

To run the Team Profile Generator, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.

## Usage

1. Run the application using the command `node index.js`.
2. Follow the prompts to enter details for the team manager and other team members.
3. Choose to add Engineers, Interns, or finish building the team.
4. Once finished, the HTML file will be generated in the `output` folder.

## Classes

The project includes the following classes:

- **Employee**: The base class for all team members.
- **Manager**: Extends Employee and includes additional information about the manager.
- **Engineer**: Extends Employee and includes GitHub-related information.
- **Intern**: Extends Employee and includes information about the intern's school.

## Tests

The project includes Jest test suites for each class to ensure the correctness of the code.

To run the tests, use the command:

## Dependencies
- Inquirer: For collecting user input.
- Jest: Testing framework for unit tests.

## Contributing
Contributions are welcome! Please submit any bug reports or feature requests through the GitHub repository.

## License
This project is licensed under the MIT License 