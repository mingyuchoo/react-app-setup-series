import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { ToDoItem } from './ToDo';

describe('<ToDoItem/> (Enzyme)', () => {
  const mockItem = { id: 0, title: 'Clean the pot' };
  const mockDeleteItem = (id: number): void => {};
  const toDoItem = mount(
    <ToDoItem item={mockItem} deleteItem={mockDeleteItem} />
  );

  it('9. Renders the text from the prop', () => {
    expect(toDoItem.find('p').text()).toEqual(mockItem.title);
  });

  it('10. Renders a delete button', () => {
    expect(toDoItem.find('button').text()).toEqual('-');
  });
});
