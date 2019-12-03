import React from 'react';
import { render } from '@testing-library/react';
import { ToDoItem } from './ToDo';

describe('<ToDoItem/>', () => {
  const item = { title: 'Clean the pot' };

  it('9. Renders the text from the prop', () => {
    const { getByTestId } = render(<ToDoItem item={item} />);
    expect(getByTestId('todo-text').textContent).toBe(item.title);
  });

  it('10. Renders a delete button', () => {
    const { getByTestId } = render(<ToDoItem item={item} />);
    expect(getByTestId('delete').textContent).toBe('-');
  });
});
