/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;