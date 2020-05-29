import React from 'react';
import { shallow } from 'enzyme';
import Example from './Example';

describe('<Example />', () => {
  it('렌더링이 깨지지 않고 정상으로 됩니다.', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.find('div').text()).toBe('I am a simple component');
  });
});
