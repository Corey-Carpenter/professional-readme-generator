// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None"){
        return ``;
    } else {
        return `![Badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return ``;
    } else {
        return `* [License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return ``;
    } else {
        return `## License
This project is licensed with ${license}`;
    }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}
# ${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(response.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

##Description
${response.description}

![${response.imageAlt}](${response.imageUrl})

## Installation
${response.installation}
  
## Usage
${response.usage}

${renderLicenseSection(response.license)}

## Contributing
${response.contributing}
  
## Tests
${response.tests}
  
## Questions
If you have any questions, you can reach out to me via GitHub or email:
* GitHub: [${response.githubUsername}](https://github.com/${response.githubUsername})
* Email: [${response.email}](mailto:${response.email})
`;
}

//module.exports = generateMarkdown;