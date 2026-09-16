import BasePage from "./BasePage";

export default class PracticePage extends BasePage {
    // locators
    private readonly practicePageUrl: string = 'https://practice.expandtesting.com/drag-and-drop-circles?utm_source=chatgpt.com';
    private readonly redCircle: Locator = this.page.locator('[class="red"]').describe('Red Circle');
      private readonly blueCircle: Locator = this.page.locator('[class="blue"]').describe('Blue Circle');
      private readonly greenCircle: Locator = this.page.locator('[class="green"]').describe('Green Circle');
      private readonly dropPlace: Locator = this.page.locator('[id="target"]').describe('Drop Place');

    // actions
async goToPracticePage() {
    await this.actions.goToURL(this.page, this.practicePageUrl);
    await this.assertions.assertElementIsVisible(this.redCircle, this.redCircle.description());
  }
async dragAndDropRedCircle() {
    await this.actions.dragAndDropElement(this.redCircle, this.dropPlace, this.redCircle.description(), this.dropPlace.description());
  }
  async dragAndDropBlueCircle() {
    await this.actions.dragAndDropElement(this.blueCircle, this.dropPlace, this.blueCircle.description(), this.dropPlace.description());
  }
  async dragAndDropGreenCircle() {
    await this.actions.dragAndDropElement(this.greenCircle, this.dropPlace, this.greenCircle.description(), this.dropPlace.description());
  }





}