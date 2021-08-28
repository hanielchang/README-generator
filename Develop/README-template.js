module.exports = templateData => {
const { title, ...README } = templateData;

const ReadMeTemplate = `
# ${title}

## Description
${README.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

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
* E-mail: ${README.email}
    `;

return ReadMeTemplate;
};