const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

export default {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  testMatch: ["**/tests/**/?(*.)+(spec|test).(ts)"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ["node_modules"],
  modulePaths: ['<rootDir>'],
  moduleNameMapper
};
