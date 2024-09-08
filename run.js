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

    // Print the output more clearly
    console.log('--- Translation Result ---');
    if (result.jsFormatted) {
      console.log('JS Formatted:', result.jsFormatted);
    }
    if (result.rawFormatted) {
      console.log('Raw Formatted:', result.rawFormatted);
    }
    console.log('Explanation:', result.explanation);
    
    readline.close();
  });
});


