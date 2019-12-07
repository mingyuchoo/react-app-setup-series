import React from 'react';
import { shallow } from 'enzyme';

import ToDo, { generateId } from './ToDo';

describe('<ToDo/> (Enzyme) - (Unit)', () => {
  const wrapper = shallow(<ToDo />);
  window.alert = jest.fn();
  it('should key pressed in input', () => {
    let input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'refresh air of the house' } });
    input.simulate('keypress', { key: 'Enter' });
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
