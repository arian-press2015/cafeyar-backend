process.env.DATABASE_URL =
  'mysql://ap2015_test:ap2015_test@localhost:3306/cafeyar_test';

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
