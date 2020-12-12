module.exports = {
  '{src,test,config}/**/*.{js,ts}': ['npm run eslint:write', 'npm run prettier:write', 'git add'],
};
