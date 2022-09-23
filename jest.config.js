module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  passWithNoTests: true,
  testTimeout: 60 * 1000
};
