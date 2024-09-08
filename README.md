# Regex Translator

This project provides a **bidirectional regex translator** for converting between raw regex patterns and JavaScript-escaped regex, with explanations for regex components.

## Features
- Convert **raw regex** into **JavaScript-compatible regex**.
- Convert **JavaScript-escaped regex** back into **raw regex**.
- Get **explanations** for each regex component to understand what it does.

### Usage

1. **Convert Raw Regex to JavaScript Syntax**:
   ```javascript
   const { translateRegex } = require('./src/translator');
   const result = translateRegex("^[a-zA-Z]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$", 'regex');
   console.log(result.jsFormatted);  // JavaScript-friendly regex
