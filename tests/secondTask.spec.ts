import { test, expect, Locator } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import PlayQaPage from '../pages/PlayQaPage';
import PracticePage from '../pages/PracticePage';
import HerokuappPage from '../pages/HerokuappPage';
test('login - valid scenario', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const emailAddress: string = 'ahmedelbanna0007@gmail.com';
  const password: string = 'P@ssw0rd';
  // Go to https://www.automationexercise.com/login
  await loginPage.goToLoginPage();
  // FILL email address textbox with valid email address
  await loginPage.enterEmailAddressFieled(emailAddress);
  // FILL password textbox with valid password
  await loginPage.enterPasswordFieled(password);
  // Click on login button
  await loginPage.clickOnLoginBtn;
  // ASSERT that the user is logged in successfully
  // await expect(logoutButton).toBeVisible();

  await page.waitForTimeout(5000);

});



test('checkbox test', async ({ page }) => {
const playQaPage = new PlayQaPage(page);
  // Go to https://play-qa.com/basic-elements
 await playQaPage.goToPlayQaPage();
  // chose the checkbox with the name of option 1
 await playQaPage.checkOption1();
  // chose the checkbox with the name of option 2
  await playQaPage.checkOption2();
  //uncheck the checkbox with the name of option 1
 await playQaPage.unCheckOption1();

  await page.waitForTimeout(5000);

});

test('drag and drop test', async ({ page }) => {
 
  const practicePage = new PracticePage(page);
  // Go to https://practice.expandtesting.com/drag-and-drop-circles?utm_source=chatgpt.com
  await practicePage.goToPracticePage();
  // Drag the red circle to the drop place
await practicePage.dragAndDropRedCircle();
  // Drag the blue circle to the drop place
  await practicePage.dragAndDropBlueCircle();
  // Drag the green circle to the drop place
  await practicePage.dragAndDropGreenCircle();
  
  await page.waitForTimeout(5000);

});




test('alert test', async ({ page }) => {
 const herokuappPage = new HerokuappPage(page);
 
  // Go to https://the-internet.herokuapp.com/javascript_alerts
  await herokuappPage.goToHerokuappPage();
  // Click on the button that triggers the JS alert
  await herokuappPage.clickOnJsAlertButton();
  // ASSERT that the alert is displayed with the correct message
  await page.on('dialog', async (dialog) => {
   await console.log(`Asserting alert message: ${dialog.message()}`);
    await expect(dialog.message()).toBe('I am a JS Alert');
    await console.log(`Accepting the alert`);
    await dialog.accept();
  });



});
