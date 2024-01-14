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




## Usage

## License
Ths project is licensed under the  license.

## Contributing


## Tests
To run tests, run the following command:


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${userEmail}. You can find more of my work at [${userName}](https://github.com/${userName}).
`;
}

module.exports = generateMarkdown;
