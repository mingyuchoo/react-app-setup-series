import { should } from 'chai';
should();

import launchPuppeteer from '../helpers/launchPuppeteer';

describe('Main Page test:', () => {
  let browser;
  let page;

  before(async () => {
    browser = await launchPuppeteer();
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1024 });
  });

  it('Default state test', () => {
    '3'.should.equals('3');
  });

  after(async () => {
    await browser.close();
  });
});
