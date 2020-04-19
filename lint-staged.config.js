module.exports = {
  'src/**/*.ts': ['other:eslint:write', 'other:prettier:write', 'npx scriptlint', 'npx @ls-lint/ls-lint', 'git add'],
};
