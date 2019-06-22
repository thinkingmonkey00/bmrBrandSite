module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['react'],
  rules: {
    semi: 'error',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React'
      }
    ]
  }
};
