import { browser, by, element } from 'protractor';

export class AppPage {
  
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root Strong')).getText() as Promise<string>;
  }

  getLoginButton(){

    return element(by.className('navbar-nav nav1'));
    
  }
}
