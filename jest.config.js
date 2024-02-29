module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [],
  reporters: ['default'],
  setupFilesAfterEnv: [
    './jest.setupTests.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
