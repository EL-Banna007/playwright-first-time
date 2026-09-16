import { expect, Locator, Page } from "@playwright/test";

export default class Actions {

    async enterTextToElement(elementLocator: Locator, text: string , fieldName? : string | undefined | null) {
    await elementLocator.clear();
    await elementLocator.fill(text);
    console.log(`Entering: ${text} to element: ${fieldName}`);
  }
  async clickOnElement(elementLocator: Locator , elementName? : string | undefined | null) {
    await elementLocator.click();
    console.log(`Clicking on element: ${elementName }`);
  }
  async goToURL(page: Page, url: string) {
  await page.goto(url);
  console.log(`Visiting This URL : ${url}`);
  }

  async checkElement(elementLocator: Locator , elementName? : string | undefined | null) {
    await elementLocator.check();
    console.log(`Checking the Element: ${elementName }`);
  }

  async unCheckElement(elementLocator: Locator , elementName? : string | undefined | null) {
    await elementLocator.uncheck();
    console.log(`Unchecking the Element: ${elementName}`);
  }

  async dragAndDropElement(sourceLocator: Locator, targetLocator: Locator, sourceName? : string | undefined | null, targetName? : string | undefined | null) {
    await sourceLocator.dragTo(targetLocator);
    console.log(`Dragging the Element: ${sourceName} to the Element: ${targetName}`);
  }

}