// Core translation logic for converting between regex and JS-escaped regex

const { explanations } = require('./explanations');

// Convert regex to JavaScript-escaped format
const regexToJs = (regexString) => regexString.replace(/\\/g, '\\\\');

// Convert JavaScript-escaped format back to regex
const jsToRegex = (jsPattern) => jsPattern.replace(/\\\\/g, '\\');

// Improved explanation logic to handle more complex components
const regexExplanation = (regexString) => {
  const patternComponents = regexString.match(/\\.|[^\\s]/g); // Improved regex to handle components better
  if (!patternComponents) {
    return "Invalid regex pattern.";
  }

  // Map over the components and find explanations
  const explanationsArray = patternComponents.map((component) => {
    return explanations[component] || `'${component}': No explanation available for this component.`;
  });

  // Provide more concise output when explanations are missing
  return explanationsArray.join("\n");
};

// Main translation function
const translateRegex = (inputString, inputType) => {
  let output;

  if (inputType === 'regex') {
    const jsFormatted = regexToJs(inputString);
    const explanation = regexExplanation(inputString);
    output = { jsFormatted, explanation };
  } else if (inputType === 'js') {
    const rawFormatted = jsToRegex(inputString);
    const explanation = regexExplanation(rawFormatted);
    output = { rawFormatted, explanation };
  } else {
    output = "Invalid input type. Use 'regex' or 'js'.";
  }

  return output;
};

module.exports = {
  translateRegex
};


