// Import the translateRegex function from index.js
const { translateRegex } = require('./src/index');

// Prompt the user for input via the command line
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for input and type
readline.question('Enter the pattern (regex or JS-escaped string): ', pattern => {
  readline.question('Enter the type (regex/js): ', type => {
    const result = translateRegex(pattern, type);
    console.log('Translation Result:', result);
    readline.close();
  });
});

