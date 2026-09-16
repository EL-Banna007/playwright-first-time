import { expect } from "@playwright/test";

export default class Assertions {

async assertElementIsVisible(elementLocator: Locator , elementName? : string | undefined | null) {
    await expect(elementLocator).toBeVisible();
    console.log(`Asserting that element: ${elementName || elementLocator} is visible`);
  }
async assertElementIsChecked(elementLocator: Locator , elementName? : string | undefined | null) {
    await expect(elementLocator).toBeChecked();
    console.log(`Asserting that element: ${elementName || elementLocator} is checked`);
  }
  async assertElementIsNotChecked(elementLocator: Locator , elementName? : string | undefined | null) {
    await expect(elementLocator).not.toBeChecked();
    console.log(`Asserting that element: ${elementName || elementLocator} is not checked`);
  }


}
