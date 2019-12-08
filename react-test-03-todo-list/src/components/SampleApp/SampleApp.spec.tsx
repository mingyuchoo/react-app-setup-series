import React from 'react';
import { shallow } from 'enzyme';

import {
  AppLink,
  AppParagraph,
  AppLogo,
  AppHeader,
  AppBody,
  AppFooter,
} from './SampleApp';

describe('SampleApp', () => {
  describe('<AppLink />', () => {
    let mockHref = 'https://reactjs.org';
    let mockTarget = '_blank';
    let mockRel = 'noopener noreferrer';
    const appLink = shallow(
      <AppLink href={mockHref} target={mockTarget} rel={mockRel} />
    );
    it('renders ', () => {
      expect(appLink.find('a').text()).toEqual('Learn React');
    });
  });
  describe('<AppParagraph />', () => {});
  describe('<AppLogo />', () => {});
  describe('<AppHeader />', () => {});
  describe('<AppBody />', () => {});
  describe('<AppFooter />', () => {});
});

// describe('<ToDoItem/> (Enzyme)', () => {
//   const mockItem = { id: 0, title: 'Clean the pot' };
//   const mockDeleteItem = jest.fn();
//   const toDoItem = mount(
//     <ToDoItem item={mockItem} deleteItem={mockDeleteItem} />
//   );

//   it('9. Renders the text from the prop', () => {
//     expect(toDoItem.find('p').text()).toEqual(mockItem.title);
//   });

//   it('10. Renders a delete button', () => {
//     expect(toDoItem.find('button').text()).toEqual('-');
//   });
// });
