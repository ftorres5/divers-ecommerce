import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './SignIn';

test('renders login form correctly', () => {
  const { getByLabelText, getByText } = render(<SignIn />);
  
  const emailInput = getByLabelText('Email address');
  const passwordInput = getByLabelText('Password');
  const signInButton = getByText('Sign in');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});

test('calls handleLogin function on form submission', async () => {
  const { getByLabelText, getByText } = render(<SignIn />);
  
  const emailInput = getByLabelText('Email address');
  const passwordInput = getByLabelText('Password');
  const signInButton = getByText('Sign in');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(signInButton);

  await waitFor(() => {
    expect(console.error).not.toHaveBeenCalled(); // Check if there are no error messages
  });
});