// creating variable and using function to bring in Iquirer
const inquirer = require("inquirer")
//creating fs and using require functiion to bring in fs to write Readme File later
const fs=require("fs")

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        // Takes user text input
        type: "input",
        name: "username",
        message: "Enter Your Github Username"
      },
      {
        // Takes user text input
        type: "input",
        name: "email",
        message: "Enter Your Email Address"
      },
      {
        // Takes user text input
        type: "input",
        name: "title",
        message: "What's Your Projects Title?"
        },
        {
          // Takes user text input
          type: "input",
          name: "description",
          message: "Enter A Description For Your Project"
        },
        {
          // Takes user text input
          type: "input",
          name: "installation",
          message: "Enter Your Projects Installation Instructions"
        },
        {
          // Takes user text input
          type: "input",
          name: "usage",
          message: "Enter Usage Information"
        },
        {
          // Takes user text input
            type: "input",
            name: "contribution",
            message: "Enter Your Project Contribution Guidelines"
        },
        {
          // Takes user text input
            type: "input",
            name: "tests",
            message: "Enter Test Instructions"
        },
        { 
          // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
            type: "checkbox",
            message: "Licensing Options",
            name: "license",
            choices: [
                "None",
                "Apache2.0",
                "GNU Public v3.0",
                "MIT",
                "Boost Software 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public 2.0",
                "GNU Affero General Public v3.0",
                "GNU General Public v2.0",
                "GNU Lesser General Public v2.1",
                "Mozilla Public 2.0",
                "the Unilicense"
              ]
          }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });