import React from 'react';
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from '@testing-library/react';
import App from './App';


test('checking main heading of the app', () => {
  render(<App />);
  const linkElement = screen.getByRole("heading");
  screen.getByText(/Timer Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('checking timer component by rendering', () => {
    render(<App />);
    const linkElement = screen.getByText(/00 : 00/i);
    expect(linkElement).toBeInTheDocument();
});