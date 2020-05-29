import React from 'react';
import { mount, ReactWrtoDoer } from 'enzyme';
import ToDo from './ToDo';

describe('<ToDo /> (Jest + Enzyme)', () => {
  let toDo: ReactWrtoDoer;
  beforeAll(() => {
    toDo = mount(<ToDo />);
  });

  it('1. Renders without crashing.', () => {
    expect(toDo.find('.ToDo-Header').text()).toEqual('React To Do');
  });

  it('2. Renders two default todo items.', () => {
    expect(toDo.find('.ToDoItem').length).toBe(2);
  });

  it('3. Has an input field', () => {
    expect(toDo.find('.ToDoInput').length).toEqual(1);
  });

  it('4. Has an add button', () => {
    expect(toDo.find('.ToDo-Add').length).toEqual(1);
  });
});

describe('Adding items (Jest + Enzyme)', () => {
  let toDo: ReactWrtoDoer;

  beforeAll(() => {
    toDo = mount(<ToDo />);
  });

  afterAll(() => {
    toDo.find('.ToDoItem-Delete').simulate('click');
  });

  window.alert = jest.fn();

  it('5. When the add button is pressed, if the input field is empty, prevent item from being added', () => {
    toDo.find('.ToDo-Add').simulate('click');
    expect(toDo.find('.ToDoItem').length).toBe(2);
    expect(window.alert).toHaveBeenCalled();
  });

  it('6. When the add button is pressed, if the input field has text, it creates a new todo item', () => {
    const event = { target: { value: 'Create more tests' } };
    toDo.find('input').simulate('change', event);
    toDo.find('.ToDo-Add').simulate('click');
    expect(
      toDo
        .find('.ToDoItem-Text')
        .at(0)
        .text()
    ).toEqual('Create more tests');
  });
});

describe('Deleting items (Jest + Enzyme)', () => {
  let toDo: ReactWrtoDoer;

  beforeAll(() => {
    toDo = mount(<ToDo />);
  });

  it('7. When the deleting button is pressed for the first todo item, it removes the entire item', () => {
    toDo
      .find('.ToDoItem-Delete')
      .first()
      .simulate('click');
    expect(toDo.find('.ToDoItem').length).toBe(1);
  });

  it('8. means that because the first toDoItem was deleted, the first toDoItem should now be buy milk', () => {
    expect(
      toDo
        .find('.ToDoItem-Text')
        .first()
        .text()
    ).toEqual('buy milk');
  });
});
