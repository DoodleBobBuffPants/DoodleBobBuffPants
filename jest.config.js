module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ["./setup.jest.js"],
  moduleNameMapper: {
    '\\.(s[ac]ss|css)$': 'babel-jest',
    'react-markdown': 'Mocks/fragment.tsx',
    '(react-syntax-highlighter|\\.gif$)': 'Mocks/dummy.tsx'
  },
  transform: {
    '\\.md$': '<rootDir>/src/Mocks/markdown.js'
  }
};
