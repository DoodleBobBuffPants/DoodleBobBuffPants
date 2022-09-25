require('jest-fetch-mock').enableMocks();

console = { ...console, error: jest.fn() }
