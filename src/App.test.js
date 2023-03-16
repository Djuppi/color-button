import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

const initialColors = {
  color1: 'MediumVioletRed',
  color2: 'MidnightBlue',
  disabledColor: 'grey'
}

test('button has the correct initial color', () => {
    render(<App />);

    // find an element with a role of button and text of 'Change to blue
    const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(initialColors.color2)}` });

    expect(colorButton).toHaveStyle({backgroundColor: initialColors.color1});
    
});

test('buttons turns blue when clicked', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(initialColors.color2)}` });

    expect(colorButton).toHaveStyle({backgroundColor: initialColors.color1});

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({backgroundColor: initialColors.color2});

    expect(colorButton).toHaveTextContent(`Change to ${replaceCamelWithSpaces(initialColors.color1)}`);

});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(initialColors.color2)}` });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
})

test('checkbox is checked when clicked, and button is disabled when checkbox is checked', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(initialColors.color2)}` });

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test('button is grey when disabled, and go back to the same color as before when enabled', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(initialColors.color2)}` });

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: initialColors.disabledColor});
  
  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: initialColors.color1});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: initialColors.color2});

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: initialColors.disabledColor});

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: initialColors.colorw});
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');

  });

  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');

  });
});