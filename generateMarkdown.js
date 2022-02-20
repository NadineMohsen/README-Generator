
// function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `# ${data.title}
----
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test-Instructions
${data.tests}

## Questions
For any questions you can reach me on github or by email
- [Github Profile](https://github.com/${data.username})
- Email ${data.email}
`;
}
// function exportying generateMarkdown function
module.exports = generateMarkdown;
