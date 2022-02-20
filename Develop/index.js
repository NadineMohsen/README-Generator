// TODO: Include packages needed for this application
// creating variable and using function to bring in Iquirer
const inquirer = require("inquirer")
//creating fs and using require functiion to bring in fs to write Readme File later
const fs=require("fs")
// creating variable and requiring generateMarkdown.js 
var generateMarkdown = require("./utils/generateMarkdown.js");
//creating variable and using require to use npm's path//doesn't need install//part of npm
var path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'Please provide a project title.  (Required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please provide a project title!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username. (Required)',
      validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your GitHub username!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'repo',
      message: 'Please enter the name of your repo. (Required)',
      validate: repoInput => {
          if (repoInput) {
              return true;
          } else {
              console.log('Please enter the name of your repo!')
          }
      }
  },
  {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your application. (Required)',
      validate: descInput => {
          if (descInput) {
              return true;
          } else {
              console.log('Please enter a description!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Please provide information for using your application. (Required)',
      validate: usageInput => {
          if (usageInput) {
              return true;
          } else {
              console.log('Please provide information for using your application!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'link',
      message: 'Please provide a link to your deployed application.',
      validate: linkInput => {
          if (linkInput) {
              return true;
          } else {
              console.log('Please enter a link!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Please list any required packages for installation of your application.',
      validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('Please enter installation instructions!');
              return false;
          }
      }
  },
  {
      type: 'list',
      name: 'license',
      message: 'Please provide license information.',
      choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
      default: 0,
      validate: licenseInput => {
          if (licenseInput) {
              return true;
          } else {
              console.log('Please provide license information!');
              return false;
          }
      }
  }, 
  {
      type: 'checkbox',
      name: 'built with',
      message: 'Please select the technologies that your application was built with.',
      choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'],
      default: 0,
  }, 
  {
      type: 'input',
      name: 'contributing',
      message: 'Please enter your guidelines for contributing.',
      validate: contributingInput => {
          if (contributingInput) {
              return true;
          } else {
              console.log('Please enter guidelines for contributing!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Please enter test information for your application.',
      validate: testsInput => {
          if (testsInput) {
              return true;
          } else {
              console.log('What packages are required to run tests for your application?');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'questions',
      message: 'Please provide an email address for others to reach you with questions.',
      validate: questionsInput => {
          if (questionsInput) {
              return true;
          } else {
              console.log('Please provide an email address!');
              return false;
          }
      }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        /* Pass your questions in here */
        questions
      )
      .then((data) => {
        // Use user feedback for... whatever!!
              // message for the user
              console.log("Generating ReadMe file for your project ...");
              // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
              writeToFile("README-generated.md", generateMarkdown({...data}));  
              
      })
}

// Function call to initialize app
init();
