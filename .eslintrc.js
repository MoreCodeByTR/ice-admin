const { getESLintConfig } = require('@applint/spec');

module.exports = getESLintConfig('react-ts', {
  globals: {
    __PAGES__: true,
    __DEV__: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'no-case-declarations': 'off',
    'no-new': 'off',
    'no-tabs': 'off',
    'comma-dangle': 'off',
    'id-length': 'off',
  },
});
