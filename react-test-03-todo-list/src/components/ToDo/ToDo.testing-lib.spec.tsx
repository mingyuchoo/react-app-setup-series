import React from 'react';
import { render } from '@testing-library/react';
import { ToDoItem } from './ToDo';

describe('<ToDoItem/>', () => {
  // const item = { title: 'Clean the pot' };
  const mockItem = { id: 0, title: 'Clean the pot' };
  const mockDeleteItem = jest.fn();

  it('9. Renders the text from the prop', () => {
    const { getByTestId } = render(
      <ToDoItem item={mockItem} deleteItem={mockDeleteItem} />
    );
    expect(getByTestId('todo-text').textContent).toBe(mockItem.title);
  });

  it('10. Renders a delete button', () => {
    const { getByTestId } = render(
      <ToDoItem item={mockItem} deleteItem={mockDeleteItem} />
    );
    expect(getByTestId('delete').textContent).toBe('-');
  });
});
