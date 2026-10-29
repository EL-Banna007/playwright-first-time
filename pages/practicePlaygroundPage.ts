
import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class PracticePlaygroundPage extends BasePage {
// locators
private readonly practicePlaygroundUrl: string = 'https://www.playwrightautomation.com/practice.html'
 private readonly SimpleAlertButton: Locator = this.page.getByRole('button', { name: 'Simple Alert' }).describe('Simple Alert Button');
 private readonly alertMessage: string = 'I am an alert box!';
 //actions
 async goToPracticePlaygroundPage() {
    await this.actions.goToURL(this.page, this.practicePlaygroundUrl);
  }
  async clickOnSimpleAlertButton() {
    await this.actions.clickOnElement(this.SimpleAlertButton, this.SimpleAlertButton.description());
  }

    
}