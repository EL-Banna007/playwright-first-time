
import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HerokuappPage extends BasePage {
// locators
private readonly herokuappUrl: string = 'https://the-internet.herokuapp.com/javascript_alerts'
 private readonly jsAlertButton: Locator = this.page.getByRole('button', { name: 'Click for JS Alert' }).describe('JS Alert Button');
 private readonly alertMessage: string = 'I am a JS Alert';
 //actions
 async goToHerokuappPage() {
    await this.actions.goToURL(this.page, this.herokuappUrl);
  }
  async clickOnJsAlertButton() {
    await this.actions.clickOnElement(this.jsAlertButton, this.jsAlertButton.description());
  }

    
}