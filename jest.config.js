/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

const config = {
  verbose: true,
  testEnvironment: 'jsdom', // TODO: which
  resetModules: true,
  preset: 'ts-jest/presets/js-with-babel-esm',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.test.json'
    }
  }
  // NOTE: Shows coverage on jest tests
  // collectCoverage: true,
  // mapCoverage: true,
}

module.exports = config
