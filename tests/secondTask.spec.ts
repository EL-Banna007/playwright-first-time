import { test, expect, Locator } from '@playwright/test';

test('login - valid scenario', async ({ page }) => {
const url : string = 'https://www.automationexercise.com/login';
const emailAddressTextbox : Locator = page.locator('//input[@type="email" and @data-qa="login-email"]');
const passwordTextbox : Locator = page.getByRole('textbox', { name: 'Password' });
const loginButton : Locator = page.getByRole('button', { name: 'Login' });
const logoutButton : Locator = page.getByRole('link', { name: /Logout/i });
const emailAddress : string = 'ahmedelbanna0007@gmail.com';
const password : string = 'P@ssw0rd';
  // Go to https://www.automationexercise.com/login
await page.goto(url);
// FILL email address textbox with valid email address
await emailAddressTextbox.fill(emailAddress);
// FILL password textbox with valid password
await passwordTextbox.fill(password);
// Click on login button
await loginButton.click();
// ASSERT that the user is logged in successfully
await expect(logoutButton).toBeVisible();

await page.waitForTimeout(5000);

});



test('checkbox test', async ({ page }) => {
const url : string = 'https://play-qa.com/basic-elements';
const option1 : Locator = page.getByRole('checkbox', { name: /option 1/i });
const option2 : Locator = page.getByRole('checkbox', { name: /option 2/i });
// Go to https://play-qa.com/basic-elements
await page.goto(url);
 // chose the checkbox with the name of option 1
await option1.check();
// ASSERT that the checkbox is checked
await expect(option1).toBeChecked();
// chose the checkbox with the name of option 2
await option2.check();
// ASSERT that the checkbox is checked
await expect(option2).toBeChecked();
//uncheck the checkbox with the name of option 1
await option1.uncheck();
// ASSERT that the checkbox is unchecked
await expect(option1).not.toBeChecked();



await page.waitForTimeout(5000);

});

test('drag and drop test', async ({ page }) => {
const url : string = 'https://practice.expandtesting.com/drag-and-drop-circles?utm_source=chatgpt.com';
const red :Locator = page.locator('[class="red"]');
const blue :Locator = page.locator('[class="blue"]');
const green :Locator = page.locator('[class="green"]');
const dropPlace :Locator = page.locator('[id="target"]');

// Go to https://practice.expandtesting.com/drag-and-drop-circles?utm_source=chatgpt.com
await page.goto(url);
// Drag the red circle to the drop place
await red.dragTo(dropPlace);
//drag the blue circle to the drop place
await blue.dragTo(dropPlace);
//drag the green circle to the drop place
await green.dragTo(dropPlace);

await page.waitForTimeout(5000);

});




test('alert test', async ({ page }) => {

  const url = 'https://the-internet.herokuapp.com/javascript_alerts';
  const jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert' });
  const jsConfirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
  // Go to https://the-internet.herokuapp.com/javascript_alerts
  await page.goto(url);
  // Click on the button that triggers the JS alert
  await jsAlertButton.click();
  // ASSERT that the alert is displayed with the correct message
 await page.on('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });



});
