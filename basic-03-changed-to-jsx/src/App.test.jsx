import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App Component', () => {
  it('App 문자열이 나타나야 합니다.', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Hi');
  });
});
