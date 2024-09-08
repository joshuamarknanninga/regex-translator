// Core translation logic for converting between regex and JS-escaped regex

const { explanations } = require('./explanations');

const regexToJs = (regexString) => regexString.replace(/\\/g, '\\\\');
const jsToRegex = (jsPattern) => jsPattern.replace(/\\\\/g, '\\');

const regexExplanation = (regexString) => {
  const patternComponents = regexString.match(/\\.|[^\\s]/g);
  return patternComponents.map((component) => {
    return explanations[component] || `'${component}': No specific explanation found.`;
  }).join("\n");
};

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

