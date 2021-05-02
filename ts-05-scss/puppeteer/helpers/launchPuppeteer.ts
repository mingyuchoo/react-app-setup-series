import { launch, Browser } from 'puppeteer';

const defaultOptions = {
  headless: true,
};

export default async (options = undefined): Promise<Browser> => {
  const puppeteerOptions = options === undefined ? defaultOptions : options;
  return await launch(puppeteerOptions);
};
