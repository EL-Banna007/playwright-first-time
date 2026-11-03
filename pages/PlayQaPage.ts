import { expect, Locator, Page } from "@playwright/test";

import BasePage from "./BasePage";

export default class PlayQaPage extends BasePage {
    
//locators
 private readonly playQaurl : string = 'https://play-qa.com/basic-elements';
 private readonly option1 : Locator = this.page.getByRole('checkbox', { name: /option 1/i }).describe('Option 1 Checkbox');
 private readonly option2 : Locator = this.page.getByRole('checkbox', { name: /option 2/i }).describe('Option 2 Checkbox');

 // actions
 async goToPlayQaPage() {
    await this.actions.goToURL(this.page, this.playQaurl);
    await this.assertions.assertElementIsVisible(this.option1, this.option1.description());
 }
    async checkOption1() {
        await this.assertions.assertElementIsNotChecked(this.option1, this.option1.description());
        await this.actions.checkElement(this.option1, this.option1.description());
        await this.assertions.assertElementIsChecked(this.option1, this.option1.description());
    }
    async unCheckOption1() {
        await this.assertions.assertElementIsChecked(this.option1, this.option1.description());
        await this.actions.unCheckElement(this.option1, this.option1.description());
        await this.assertions.assertElementIsNotChecked(this.option1, this.option1.description());
    }
    async checkOption2() {
        await this.assertions.assertElementIsNotChecked(this.option2, this.option2.description());
        await this.actions.checkElement(this.option2, this.option2.description());
        await this.assertions.assertElementIsChecked(this.option2, this.option2.description());
    }


   
}