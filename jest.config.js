module.exports = {
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
