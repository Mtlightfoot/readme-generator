// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
* ${data.installation}

## Usage
${data.usage}


## License
Ths project is licensed under the ${data.license} license.

## Contributing
${data.userContribution}

## Tests
To run tests, run the following command:
* ${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.userEmail}. You can find more of my work at [${data.userName}](https://github.com/${data.userName}).
`;
}

module.exports = generateMarkdown;
