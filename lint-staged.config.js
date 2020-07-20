module.exports = {
  'src/**/*.ts': ['npm run other:eslint:write', 'npm run other:prettier:write', 'npx scriptlint', 'git add'],
};
