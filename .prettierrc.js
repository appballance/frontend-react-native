module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  insertPragma: false,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',

  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'babel',
        functionParentheses: 'avoid',
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
        functionParentheses: 'avoid',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
        functionParentheses: 'avoid',
        jsxSingleQuote: false,
      },
    },
  ],
};
