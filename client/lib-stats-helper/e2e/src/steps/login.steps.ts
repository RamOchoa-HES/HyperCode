import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { LogInPage } from "../pages/login.po";

let page: LogInPage;

Before(() => {
  page = new LogInPage();
});

Given(/^I am on login page$/, async () => {
  await page.navigateToLogIn();
});

When(/^I enter the wrong username$/, async () => {
  await page.enterUsername("wrong");
});

When(/^I enter the wrong password$/, async () => {
  await page.enterPassword("wrong");
});
When(/^I click submit$/, async () => {
  await page.clickSubmit();
});

Then(/^I try to access internal page$/, async () => {
  await page.tryToAccessInternalPage();
});
Then(/^Navigation will redirect me back homepage$/, async () => {
  expect(await page.getTitleText()).to.equal("Regina Library");
});
