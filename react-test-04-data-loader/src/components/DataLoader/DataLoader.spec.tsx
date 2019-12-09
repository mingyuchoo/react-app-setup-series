import React from 'react';
import { shallow } from 'enzyme';
import nock from 'nock';

import DataLoader from 'DataLoader';

describe('<DataLoader />', () => {
  before(() => {
    nock('http://localhost:3001')
      .get('/links')
      .reply(200, [
        { id: 1, title: 'Load of Rings' },
        { id: 2, title: 'Mars' },
      ]);
  });
  after(() => {
    nock.restore();
  });

  it('should return data', () => {
    const wrapper = shallow(<DataLoader />);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
});
