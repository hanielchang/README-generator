module.exports = templateData => {
const { title, ...README } = templateData;

const ReadMeTemplate = `
# ${title}

## Description
${README.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${README.installation}

## Usage
${README.usage}

## License
${README.license}

## Contributions
${README.contributions}

## Tests
${README.tests}

## Questions
* GitHub username: ${README.userName}
* [Link to Github Profile](https://github.com/${README.userName})
* E-mail: ${README.email}
    `;

return ReadMeTemplate;
};