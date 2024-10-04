module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
    },
};
