module.exports = {
  'src/**/*.{js,jsx,json,md}': ['npm run lint', 'npx scriptlint', 'npx @ls-lint/ls-lint', 'git add'],
};
