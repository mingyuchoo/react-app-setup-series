import React from 'react';
import { shallow } from 'enzyme';

import UsersContainer from './UsersContainer';

describe('<UsersContainer />', () => {
  it('렌더링이 됩니다.', () => {
    const wrapper = shallow(<UsersContainer />);
    expect(wrapper.find('h2')).toHaveLength(2);
  });
});
