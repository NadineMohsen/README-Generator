// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// creates license badge if license is chosen
const renderLicenseBadge = license => {
  if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return ` [${license} License](https://opensource.org/licenses/${license})
`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is licensed under the ${license} license.
    ${renderLicenseLink(license)}
    `
;
} else {
    return '';
}

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, github, repo, license } = data;
  let readmeContents = '';
  return `# ${data.title}
  ${renderLicenseBadge(license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Repository](#Repository)
- [Link](#Link)
- [Questions](#Questions)

## Description
${data.description}

## Installation
To use this application, please install: 
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test-Instructions
${data.tests}

## License
${renderLicenseSection(license)}

## Repository
${data.repo}

## Link 
${data.link}

## Questions
For any questions you can reach me on github or by email
- Github [My Profile on Github](https://github.com/${data.github})
- Email ${data.email}
${readmeContents}`;;
}

module.exports = generateMarkdown;