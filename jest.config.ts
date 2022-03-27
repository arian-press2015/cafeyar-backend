process.env.DATABASE_URL =
  'mysql://ap2015_test:ap2015_test@localhost:3306/gympan_test';
process.env.NODE_CONFIG_DIR = './dist/config';

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
