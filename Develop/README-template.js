const renderLicenseSection = require('./utils/generateMarkdown');

function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return 'MIT'
        case 'Apache':
            return 'Apache'
        case 'GNU':
            return 'GNU'
        case 'OpenBSD':
            return 'OpenBSD'
        case 'WordPress':
            return 'WordPress'
        default:
            return ''
    }
};

module.exports = templateData => {
    const { title, ...README } = templateData;

    const ReadMeTemplate = `
# ${title} ![GitHub License](https://img.shields.io/badge/license-${renderLicenseBadge(README.license)}-blue.svg)

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

## ${README.license} License
${renderLicenseSection(README.license)}

## Contributions
${README.contributions}

## Tests
${README.tests}

## Questions
* GitHub username: ${README.userName}
* [Click here for Github Profile](https://github.com/${README.userName})
* E-mail: ${README.email}
    `;

    return ReadMeTemplate;
};