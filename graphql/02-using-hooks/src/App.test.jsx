import React from 'react';

// for testing-library
import { cleanup, render as testingRender } from '@testing-library/react';

// for enzyme
import { shallow, mount, render } from 'enzyme';

// target to test
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  test('[testing-libaray] should render learn react link', () => {
    // light-weight solution for testing web pages by querying and interacting with DOM
    // eazy to write maintainable tests
    // don't break your tests
    const { getByText } = testingRender(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('[enzyme - shallow rendering] should render App Document', () => {
    // shallow is real unit test(isolation, no children render)
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-link').text()).toEqual('Learn React');
  });

  it('[enzyme - only calls render but renders all children] should render App Document', () => {
    // Always begin with shallow
    // If you want to test children rendering with less overhead than mount
    // and you are not intested in lifecycle methdos, use render
    const wrapper = render(<App />);
    expect(wrapper.find('.App-link').text()).toEqual('Learn React');
  });

  it('[enzyme - full DOM rendering] should render App Document', () => {
    // mount is FULL rendering including child components.
    // If you want to test componentDidMount and componentDidUpdate should be tested, use mount
    // If you want to test component lifecycle and child behavior, use mount
    const wrapper = mount(<App />);
    expect(wrapper.find('.App-link').text()).toEqual('Learn React');
  });
});
