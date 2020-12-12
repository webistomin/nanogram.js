module.exports = {
  '{src,test}/**/*.{js,ts}': ['npm run other:eslint:write', 'npm run other:prettier:write', 'git add'],
};
