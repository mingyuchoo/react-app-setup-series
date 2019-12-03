/**
 * INSTALL
 *  - npm install --save-dev enzyme enzyme-adapter-16
 *  - npm install --save-dev @types/enzyme @types/enzyme-adpater-react-16
 */
import React from 'react';
import TaskApp from './TaskApp';

import { shallow } from 'enzyme';

xdescribe('<TaskApp /> (Enzyme)', () => {
  it('render without crashing (Enzyme)', () => {
    const wrapper = shallow(<TaskApp />);
    const welcome = <h1 className="App-title">Welcome to React</h1>;
  });
});
