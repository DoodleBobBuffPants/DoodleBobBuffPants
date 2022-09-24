module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ["./setupJest.js"],
  moduleNameMapper: {
    '\\.(s(a|c)ss|css)$': 'babel-jest',
    'react-markdown': 'Mocks/fragment.tsx',
    'react-syntax-highlighter': 'Mocks/dummy.tsx'
  },
  transform: {
    '\\.md$': '<rootDir>/src/Mocks/markdown.js'
  }
};
