import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { ToDoItem } from './ToDo';

describe('<ToDoItem/> (Enzyme)', () => {
  let item = { title: 'Clean the pot' };
  let toDoItem: ReactWrapper;
  toDoItem = mount(<ToDoItem item={item.title} />);

  it('9. Renders the text from the prop', () => {
    expect(toDoItem.find('p').text()).toEqual(item.title);
  });

  it('10. Renders a delete button', () => {
    expect(toDoItem.find('button').text()).toEqual('-');
  });
});
