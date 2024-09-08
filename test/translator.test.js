// Unit tests for the translator functions
const { translateRegex } = require('../src/translator');

test('Raw regex to JS-escaped regex', () => {
  const result = translateRegex("^[a-z]+$", 'regex');
  expect(result.jsFormatted).toBe("^[a-z]+$");
});

test('JS-escaped regex to raw regex', () => {
  const result = translateRegex("^\\[a-z]+\\$", 'js');
  expect(result.rawFormatted).toBe("^[a-z]+$");
});

test('Explanation of regex', () => {
  const result = translateRegex("^[a-z]+$", 'regex');
  expect(result.explanation).toContain("^: Matches the start of the string.");
});
