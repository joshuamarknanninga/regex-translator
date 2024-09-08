// Explanations for common regex components
const explanations = {
  "\\d": "Matches any digit (0-9).",
  "\\w": "Matches any word character (alphanumeric and underscore).",
  "\\s": "Matches any whitespace character.",
  "\\D": "Matches any non-digit character.",
  "\\W": "Matches any non-word character.",
  "\\S": "Matches any non-whitespace character.",
  ".": "Matches any single character except newline.",
  "*": "Matches 0 or more repetitions of the preceding element.",
  "+": "Matches 1 or more repetitions of the preceding element.",
  "?": "Matches 0 or 1 repetition of the preceding element.",
  "^": "Matches the start of a string.",
  "$": "Matches the end of a string.",
  "\\(": "Opening parenthesis for a capturing group.",
  "\\)": "Closing parenthesis for a capturing group.",
  "\\[": "Opening bracket for a character class.",
  "\\]": "Closing bracket for a character class.",
  "|": "Alternation (OR operator).",
  "\\b": "Word boundary."
};

module.exports = {
  explanations
};

  