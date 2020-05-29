import React from 'react';
import { shallow } from 'enzyme';

import ToDo, { generateId } from './ToDo';

describe('<ToDo/> (Enzyme) - (Unit)', () => {
  const wrapper = shallow(<ToDo />);
  window.alert = jest.fn();
  it('should act correct action when Enter key pressed in input', () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'Enter key pressed' } });
    input.simulate('keypress', { key: 'Enter' });
  });

  it('should do not act actions when Not Enter key pressed in input', () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'This is not Enter key' } });
    input.simulate('keypress', { key: 'Tab' });
  });
});

describe('generateId in ToDo.tsx', () => {
  const list = [
    { id: 1, title: 'clean the house' },
    { id: 2, title: 'buy milk' },
  ];

  it('should return 1', () => {
    expect(generateId([])).toEqual(1);
  });

  it('should return 3', () => {
    expect(generateId(list)).toEqual(3);
  });
});
