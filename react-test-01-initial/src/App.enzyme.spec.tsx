/**
 * INSTALL
 *  - npm install --save-dev enzyme enzyme-adapter-16
 *  - npm install --save-dev @types/enzyme @types/enzyme-adpater-react-16
 */
import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

it('render without crashing (Enzyme)', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toBe(true);
});
