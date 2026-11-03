import {  expect, Locator } from '@playwright/test';
import { test } from '../fixtures/Fixtures.ts';
test('login - valid scenario', async ({ page , loginPage }) => {

  const emailAddress: string = 'ahmedelbanna0007@gmail.com';
  const password: string = 'P@ssw0rd';
  // Go to https://www.automationexercise.com/login
  await loginPage.goToLoginPage();
  // Wait for the page to fully load
  await loginPage.waits.waitForPageToFullyLoad();
  // FILL email address textbox with valid email address
  await loginPage.enterEmailAddressFieled(emailAddress);
  // FILL password textbox with valid password
  await loginPage.enterPasswordFieled(password);
  // Click on login button
  await loginPage.clickOnLoginBtn;
  // ASSERT that the user is logged in successfully
  // await expect(logoutButton).toBeVisible();

 await loginPage.waits.waitForTimeoutInSeconds(5);

});



test('checkbox test', async ({ page,playQaPage }) => {

  // Go to https://play-qa.com/basic-elements
 await playQaPage.goToPlayQaPage();
 // Wait for the page to fully load
 await playQaPage.waits.waitForPageToFullyLoad();
  // chose the checkbox with the name of option 1
 await playQaPage.checkOption1();
  // chose the checkbox with the name of option 2
  await playQaPage.checkOption2();
  //uncheck the checkbox with the name of option 1
 await playQaPage.unCheckOption1();

  await playQaPage.waits.waitForTimeoutInSeconds(5);

});

test('drag and drop test', async ({ page , practicePage }) => {

  // Go to https://practice.expandtesting.com/drag-and-drop-circles?utm_source=chatgpt.com
  await practicePage.goToPracticePage();
  // Wait for the page to fully load
  await practicePage.waits.waitForPageToFullyLoad();
  // Drag the red circle to the drop place
await practicePage.dragAndDropRedCircle();
  // Drag the blue circle to the drop place
  await practicePage.dragAndDropBlueCircle();
  // Drag the green circle to the drop place
  await practicePage.dragAndDropGreenCircle();
  
  await practicePage.waits.waitForTimeoutInSeconds(5);

});




test('alert test', async ({ page , practicePlaygroundPage}) => {
 
  // Go to https://www.playwrightautomation.com/practice.html
  await practicePlaygroundPage.goToPracticePlaygroundPage();
  // Wait for the page to fully load
  await practicePlaygroundPage.waits.waitForPageToFullyLoad();
  // Click on the button that triggers the Simple Alert
  await practicePlaygroundPage.clickOnSimpleAlertButton();
  // ASSERT that the alert is displayed with the correct message
  await page.on('dialog', async (dialog) => {
   await console.log(`Asserting alert message: ${dialog.message()}`);
    await expect(dialog.message()).toBe('I am an alert box!');
    await console.log(`Accepting the alert`);
    await dialog.accept();
  });
  await practicePlaygroundPage.waits.waitForTimeoutInSeconds(5);



});
