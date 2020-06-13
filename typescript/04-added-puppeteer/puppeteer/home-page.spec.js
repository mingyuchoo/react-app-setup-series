const puppeteer = require('puppeteer');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

describe('The Home Page', async () => {
  it('has load page', async () => {
    await page.goto('http://localhost:3000');
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
    await page.evaluate(() => console.log(`url is ${location.href}`));
    await page.screenshot({ path: 'home-page.png' });
  });
});

afterAll(async () => {
  await browser.close();
});
