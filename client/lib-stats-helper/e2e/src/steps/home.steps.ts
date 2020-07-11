import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { HomePage } from "../pages/home.po";

let page: HomePage;

Before(() => {
  page = new HomePage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I wait for the page to load$/, () => {});

Then(/^I should see Regina Library title$/, async () => {
  expect(await page.getTitleText()).to.equal("Regina Library");
});
