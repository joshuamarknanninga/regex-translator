// Explanations for common regex components

const explanations = {
    "^": "Matches the start of the string.",
    "$": "Matches the end of the string.",
    ".": "Matches any single character except newline.",
    "*": "Matches 0 or more repetitions of the preceding character.",
    "+": "Matches 1 or more repetitions of the preceding character.",
    "?": "Matches 0 or 1 repetition of the preceding character.",
    "\\d": "Matches any digit (0-9).",
    "\\D": "Matches any non-digit character.",
    "\\w": "Matches any alphanumeric character or underscore.",
    "\\W": "Matches any non-word character.",
    "\\s": "Matches any whitespace character (spaces, tabs).",
    "\\S": "Matches any non-whitespace character.",
    "[a-z]": "Matches any lowercase letter.",
    "[A-Z]": "Matches any uppercase letter.",
    "[0-9]": "Matches any digit.",
    "[abc]": "Matches any of the characters a, b, or c.",
    "[^abc]": "Matches any character except a, b, or c.",
    "(abc)": "Capturing group for the sequence 'abc'.",
    "|": "Matches either the expression before or after the pipe.",
    "{n}": "Matches exactly n occurrences of the preceding element.",
    "{n,m}": "Matches between n and m occurrences of the preceding element."
  };
  
  module.exports = { explanations };
  