import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is sample content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state initially', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data after fetching from API', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    rerender(<CoreFunctionalityComponent />);
    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is sample content\./i)).toBeInTheDocument();
  });

  test('handles error when fetching data', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('allows user interaction with buttons', async () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    expect(screen.getByText(/interaction successful/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label', 'Click to perform action');
    fireEvent.keyDown(button, { key: 'Enter', code: 13, charCode: 13 });
    expect(CoreFunctionalityComponent).toHaveBeenCalled();
  });

  test('validates edge cases for input fields', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getByText(/input cannot be empty/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is sample content.',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state initially', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data after fetching from API', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    rerender(<CoreFunctionalityComponent />);
    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is sample content\./i)).toBeInTheDocument();
  });

  test('handles error when fetching data', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('allows user interaction with buttons', async () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(CoreFunctionalityComponent).toHaveBeenCalled());
    expect(screen.getByText(/interaction successful/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label', 'Click to perform action');
    fireEvent.keyDown(button, { key: 'Enter', code: 13, charCode: 13 });
    expect(CoreFunctionalityComponent).toHaveBeenCalled();
  });

  test('validates edge cases for input fields', () => {
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getByText(/input cannot be empty/i)).toBeInTheDocument();
  });
});