import React from 'react';
import { mount, shallow, render } from 'enzyme';

import DataLoader, { Button } from './DataLoader';
import { useFetch } from './DataLoaderHooks';

/**
 * https://blog.bitsrc.io/how-to-create-and-test-react-custom-hooks-927fe468c361
 * https://www.valentinog.com/blog/hooks/
 * https://www.taniarascia.com/crud-app-in-react-with-hooks/
 */
//<DataLoader /> 안에서 호출하는 useFetch를 목킹함
jest.mock('./DataLoaderHooks', () => ({
  useFetch: jest.fn().mockReturnValue([{ id: 1, title: 'Hello' }]),
}));

describe('<DataLoader /> (Enzyme)', () => {
  it('renders without crasing', () => {
    const wrapper = shallow(<DataLoader />);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
  it('renders children elelment', () => {
    const wrapper = shallow(<DataLoader />);
  });
});

describe('<Button /> (Enzyme)', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should fire click event', () => {
    const wrapper = shallow(<Button />);
    wrapper.find('button').simulate('click');
    expect(wrapper.text()).toEqual('Thanks, been clicked');
  });
});
