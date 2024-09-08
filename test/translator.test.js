const { translateRegex } = require('../src/translator');

test('translates regex to JS-escaped format', () => {
  const input = '\\d+';
  const result = translateRegex(input, 'regex');
  expect(result.jsFormatted).toBe('\\\\d+');
  expect(result.explanation).toContain('Matches any digit (0-9).');
});

test('translates JS-escaped format back to regex', () => {
  const input = '\\\\d+';
  const result = translateRegex(input, 'js');
  expect(result.rawFormatted).toBe('\\d+');
  expect(result.explanation).toContain('Matches any digit (0-9).');
});

test('handles alphanumerical strings correctly', () => {
  const input = 'simpleText123';
  const result = translateRegex(input, 'alphanumerical');
  expect(result.translated).toBe('simpleText123');
  expect(result.explanation).toBe("This is an alphanumerical string: 'simpleText123'. It does not contain any regex components.");
});
