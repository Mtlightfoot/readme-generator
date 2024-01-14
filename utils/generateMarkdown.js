// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
* ${installation}

## Usage
${usage}


## License
Ths project is licensed under the ${license} license.

## Contributing
${userContribution}

## Tests
To run tests, run the following command:
* ${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${userEmail}. You can find more of my work at [${userName}](https://github.com/${userName}).
`;
}

module.exports = generateMarkdown;
