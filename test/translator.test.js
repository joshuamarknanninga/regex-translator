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
