import config from '../config/config.json';
const baseURL = config.baseURL;

export default class PageNavigator {
  page: any;

  constructor(page) {
    this.page = page;
  }
  private async gotoPage(path: string) {
    await this.page.goto(`${baseURL}${path}`);
  }
  public async loadMainPage(): Promise<void> {
    return this.gotoPage(config.mainPage).then(() => new this.loadMainPage(this.psage));
  }
}
