import config from '../config/config.json';
const baseURL = config.baseURL;

export default class PageNavigator {
  page: any;

  constructor(page) {
    this.page = page;
  }
  public async loadMainPage(): Promise<void> {
    await this.page.goto(`${baseURL}`);
  }
}
