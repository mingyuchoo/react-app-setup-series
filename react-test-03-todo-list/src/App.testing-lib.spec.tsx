import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ToDo from './components/ToDo/ToDo';

describe('<App /> (Testing-library)', () => {
  it('1. Renders without crashing.', () => {
    const { getByText, getByTestId } = render(<App />);
    expect(getByText('React To Do')).toBeInTheDocument();
    expect(getByTestId('todo-input')).toBeInTheDocument();
  });

  it('2. Renders two default todo items.', () => {
    const { getByText } = render(<ToDo />);
    expect(getByText('clean the house')).toBeInTheDocument();
    expect(getByText('buy milk')).toBeInTheDocument();
  });

  it('3. Has an input field', () => {
    const { getByTestId } = render(<ToDo />);
    expect(getByTestId('todo-input')).toBeInTheDocument();
  });

  it('4. Has an add button', () => {
    const { getByTestId } = render(<ToDo />);
    expect(getByTestId('add').textContent).toBe('+');
  });
});

describe('Adding items (Testing-library)', () => {
  it('5. When the add button is pressed, if the input field is empty, prevent item from being added', () => {
    const { getByTestId } = render(<ToDo />);
    window.alert = jest.fn();
    fireEvent.click(getByTestId('add'));
    expect(window.alert).toHaveBeenCalled();
  });

  it('6. When the add button is pressed, if the input field has text, it creates a new todo item', async () => {
    const { getByTestId, getByText } = render(<ToDo />);

    fireEvent.change(getByTestId('todo-input'), {
      target: { value: 'Create more tests' },
    });
    expect(getByTestId('todo-input').value).toBe('Create more tests');

    fireEvent.click(getByTestId('add'));
    expect(getByText('Create more tests')).toBeInTheDocument();
  });
});
