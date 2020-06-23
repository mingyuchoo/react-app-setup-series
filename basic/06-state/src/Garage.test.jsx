import React from 'react';
import { shallow } from 'enzyme';
import Garage, { Car } from './Garage';

describe('<Car />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Car />);
    console.log(wrapper.debug());
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Button', () => {
    it('click', () => {
      wrapper.find("#change-color").props().onClick();
      expect(setState).toHaveBeenCalledWith({
        brand: "Ford",
        model: "Mustang",
        color: "blue",
        year: 1964
      });
    })
  })
})