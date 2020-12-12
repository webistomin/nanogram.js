module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn'],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/camelcase': 0,
      },
    },
  ],
};
