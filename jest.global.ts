import '@testing-library/jest-dom';
global.Date.now = jest.fn(() => 1482363367071);
global.performance.mark = jest.fn();
jest.mock("@vercel/analytics/react", () => ({
    Analytics: jest.fn() 
}))