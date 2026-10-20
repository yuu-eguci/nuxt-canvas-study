module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    // jsdom では canvas を描画できないため、 vue-drawing-canvas はテスト用の代替 component に差し替えます。
    '^vue-drawing-canvas$': '<rootDir>/test/VueDrawingCanvasMock.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest',
    '^.+\\.png$': '<rootDir>/test/fileTransform.js'
  },
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/plugins/**/*.ts',
    '<rootDir>/middleware/**/*.ts'
  ],
  testEnvironment: 'jsdom'
}
