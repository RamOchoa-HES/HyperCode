import { browser, by, element } from "protractor";

export class LogInPage {
  navigateToLogIn() {
    return browser.get(browser.baseUrl + "#/login") as Promise<any>;
  }

  enterUsername(username: string) {
    return element(by.css("#username")).sendKeys(username) as Promise<any>;
  }

  enterPassword(pwd: string) {
    return element(by.css("#password")).sendKeys(pwd) as Promise<any>;
  }

  clickSubmit() {
    return element(by.css("#logInBtn")).click() as Promise<any>;
  }

  tryToAccessInternalPage() {
    return browser.get(browser.baseUrl + "#/access/view") as Promise<any>;
  }
  getTitleText() {
    return element(by.css(".navbar-brand")).getText() as Promise<string>;
  }
}
