import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display library name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Regina Library');
  });

  it('should have a login', () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('Log In');
  });

});