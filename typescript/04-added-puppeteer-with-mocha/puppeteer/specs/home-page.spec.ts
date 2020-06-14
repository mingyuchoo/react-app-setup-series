import { should } from 'chai';
should();

import launchPuppeteer from '../helpers/launchPuppeteer';
import PageNavigator from '../helpers/PageNavigator';

describe('Main Page test:', () => {
  let browser;
  let page;
  let pageNav;
  let mainPage;

  before(async () => {
    browser = await launchPuppeteer();
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1024 });
    pageNav = new PageNavigator(page);
  });

  beforeEach(async () => {
    mainPage = await pageNav.loadMainPage();
  });
  it('Default state test', () => {
    '3'.should.equals('3');
  });

  after(async () => {
    await browser.close();
  });
});
