module.exports = {
  'src/**/*.ts': ['other:eslint:write', 'other:prettier:write', 'npx scriptlint', 'git add'],
};
