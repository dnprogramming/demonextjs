import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})
const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
     "lcov"
   ],
  maxWorkers: '50%',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.global.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/tests-example/'
  ]
}

export default createJestConfig(config);