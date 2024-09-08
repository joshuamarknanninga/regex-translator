// Main entry point, exporting translation functions
const { translateRegex } = require('./translator');

module.exports = {
  translateRegex
};
// Import the translateRegex function
const { translateRegex } = require('./translator');

// Example usage: translate a regex pattern
const regexInput = '\\d+';
const inputType = 'regex'; // or 'js' for JavaScript-escaped patterns

const result = translateRegex(regexInput, inputType);

// Print the output
console.log('Translation Result:', result);