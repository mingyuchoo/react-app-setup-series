import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from './App';
import { findAllByAltText } from '@testing-library/dom';

describe('<App /> (Jest + Enzyme)', () => {
  let app: ReactWrapper;
  beforeAll(() => {
    app = mount(<App />);
  });

  it('1. Renders without crashing.', () => {
    expect(app.find('.ToDo-Header').text()).toEqual('React To Do');
  });

  it('2. Renders two default todo items.', () => {
    expect(app.find('.ToDoItem').length).toBe(2);
  });

  it('3. Has an input field', () => {
    expect(app.find('.ToDoInput').length).toEqual(1);
  });

  it('4. Has an add button', () => {
    expect(app.find('.ToDo-Add').length).toEqual(1);
  });
});

describe('Adding items (Jest + Enzyme)', () => {
  let app: ReactWrapper;

  beforeAll(() => {
    app = mount(<App />);
  });

  afterAll(() => {
    app.find('.ToDoItem-Delete').simulate('click');
  });

  window.alert = jest.fn();

  it('5. When the add button is pressed, if the input field is empty, prevent item from being added', () => {
    app.find('.ToDo-Add').simulate('click');
    expect(app.find('.ToDoItem').length).toBe(2);
    expect(window.alert).toHaveBeenCalled();
  });

  it('6. When the add button is pressed, if the input field has text, it creates a new todo item', () => {
    const event = { target: { value: 'Create more tests' } };
    app.find('input').simulate('change', event);
    app.find('.ToDo-Add').simulate('click');
    expect(
      app
        .find('.ToDoItem-Text')
        .at(0)
        .text()
    ).toEqual('Create more tests');
  });
});
