module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    jest: true
  },
  // extends: 'standard-with-typescript',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', 'tsconfig.*.json']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['import'],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  rules: {
  }
}
