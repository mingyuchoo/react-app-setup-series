import React from 'react';
import { shallow } from 'enzyme';

import {
  AppLink,
  AppParagraph,
  AppLogo,
  AppHeader,
  AppBody,
  AppFooter,
} from './App';

describe('SampleApp', () => {
  describe('<AppLink />', () => {
    const mockHref = 'https://reactjs.org';
    const mockTarget = '_blank';
    const mockRel = 'noopener noreferrer';
    const appLink = shallow(
      <AppLink href={mockHref} target={mockTarget} rel={mockRel} />
    );
    it('renders ', () => {
      expect(appLink.find('.App-link').text()).toEqual('Learn React');
    });
  });
  describe('<AppParagraph />', () => {
    const appParagraph = shallow(<AppParagraph />);
    it('renders', () => {
      expect(appParagraph.find('p').text()).toContain('Edit');
    });
  });
  describe('<AppLogo />', () => {
    const appLogo = shallow(<AppLogo />);
    it('renders', () => {
      expect(appLogo.find('.App-logo')).toHaveLength(1);
    });
  });
  describe('<AppHeader />', () => {
    const appHeader = shallow(<AppHeader />);
    it('renders', () => {
      expect(appHeader.find('.App-header')).toHaveLength(1);
    });
  });
  describe('<AppBody />', () => {
    const appBody = shallow(<AppBody />);
    it('renders', () => {
      expect(appBody.find('.App-body')).toHaveLength(1);
    });
  });
  describe('<AppFooter />', () => {
    const appFooter = shallow(<AppFooter />);
    it('renders', () => {
      expect(appFooter.find('footer')).toHaveLength(1);
    });
  });
});
