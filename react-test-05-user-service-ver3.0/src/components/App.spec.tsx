import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('렌더링이 됩니다.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2')).toHaveLength(2);
  });
});
