import React from 'react';
import { mount, shallow } from 'enzyme';
import nock from 'nock';

import DataLoader from './DataLoader';
import axios from 'axios';

describe('<DataLoader /> (Enzyme)', () => {
  // beforeAll(() => {
  //   nock('http://localhost:3001')
  //     .get('/links')
  //     .reply(200, [
  //       { id: 1, title: 'Load of Rings' },
  //       { id: 2, title: 'Mars' },
  //     ]);
  // });
  // afterAll(() => {
  //   nock.restore();
  // });

  it('should return data', async () => {
    axios.get = jest.fn().mockImplementationOnce(() =>
      Promise.resolve([
        { id: 1, title: 'Load of Rings' },
        { id: 2, title: 'Mars' },
      ])
    );
    const wrapper = shallow(<DataLoader />);
    expect(axios.get).toHaveBeenCalled();
    // expect(wrapper.find('ul')).toHaveLength(1);
  });
});
