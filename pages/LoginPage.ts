import { expect, Locator, Page } from "@playwright/test";
import Actions from "../utilies/Actions";
import Assertions from "../utilies/Assertions";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

  // locators
  private readonly emailAddressTextbox= this.page.locator('//input[@type="email" and @data-qa="login-email"]').describe('Email Address Textbox');
  private readonly passwordTextbox= this.page.getByRole('textbox', { name: 'Password' }).describe('Password Textbox');
  private readonly loginButton= this.page.getByRole('button', { name: 'Login' }).describe('Login Button');
  private readonly logoutButton= this.page.getByRole('link', { name: /Logout/i }).describe('Logout Link');
  private readonly loginPageUrl: string = 'https://www.automationexercise.com/login';

  // actions 
  async enterEmailAddressFieled(emailAddress: string) {
  await this.actions.enterTextToElement(this.emailAddressTextbox, emailAddress,this.emailAddressTextbox.description());
  }
  async enterPasswordFieled(password: string) {
  await this.actions.enterTextToElement(this.passwordTextbox, password,this.passwordTextbox.description());
  }

  async clickOnLoginBtn() {
    await this.actions.clickOnElement(this.loginButton, this.loginButton.description());
    await this.assertions.assertElementIsVisible(this.logoutButton, this.logoutButton.description());
  }

async goToLoginPage() {
  await this.actions.goToURL(this.page, this.loginPageUrl); 
  await this.waits.waitForPageToFullyLoad();
  await this.assertions.assertElementIsVisible(this.emailAddressTextbox, this.emailAddressTextbox.description());
  }

}