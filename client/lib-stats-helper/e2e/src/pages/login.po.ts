import { browser, by, element } from "protractor";

export class HomePage {
  navigateTo() {
    return browser.get(browser.baseUrl + "#/login") as Promise<any>;
  }

  getTitleText() {
    return element(by.css(".navbar-brand")).getText() as Promise<string>;
  }
}
