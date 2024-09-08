// Core translation logic for converting between regex, JS-escaped regex, and alphanumerical strings

const { explanations } = require('./explanations');

// Convert regex to JavaScript-escaped format
const regexToJs = (regexString) => regexString.replace(/\\/g, '\\\\');

// Convert JavaScript-escaped format back to regex
const jsToRegex = (jsPattern) => jsPattern.replace(/\\\\/g, '\\');

// Alphanumerical translation: just return the string
const translateAlphanumerical = (inputString) => inputString;

// Explanation for alphanumerical strings
const alphanumericalExplanation = (inputString) => {
  return `This is an alphanumerical string: '${inputString}'. It does not contain any regex components.`;
};

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

  return explanationsArray.join("\n");
};

// Main translation function with validation
const translateRegex = (inputString, inputType) => {
  let output;

  // Simple validation: If the input string doesn't look like regex but is passed as regex, treat as alphanumerical
  const looksLikeRegex = inputString.includes('\\') || /^[^a-zA-Z0-9 ]*$/.test(inputString);

  if (inputType === 'regex' && !looksLikeRegex) {
    output = {
      message: "Input does not appear to be a valid regex pattern. You may want to select 'alphanumerical' instead."
    };
  } else if (inputType === 'regex') {
    const jsFormatted = regexToJs(inputString);
    const explanation = regexExplanation(inputString);
    output = { jsFormatted, explanation };
  } else if (inputType === 'js') {
    const rawFormatted = jsToRegex(inputString);
    const explanation = regexExplanation(rawFormatted);
    output = { rawFormatted, explanation };
  } else if (inputType === 'alphanumerical') {
    const translated = translateAlphanumerical(inputString);
    const explanation = alphanumericalExplanation(inputString);
    output = { translated, explanation };
  } else {
    output = "Invalid input type. Use 'regex', 'js', or 'alphanumerical'.";
  }

  return output;
};

module.exports = {
  translateRegex
};


