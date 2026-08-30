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
const url : string = 'https://playwrightlab.github.io/';
const checkboxJavascript : Locator = page.getByRole('checkbox', { name: /javascript/i });
const checkboxPython : Locator = page.getByRole('checkbox', { name: /python/i });
// Go to https://playwrightlab.github.io/
await page.goto(url);
 // chose the checkbox with the name of javascript
await checkboxJavascript.check();
// ASSERT that the checkbox is checked
await expect(checkboxJavascript).toBeChecked();
// chose the checkbox with the name of python
await checkboxPython.check();
// ASSERT that the checkbox is checked
await expect(checkboxPython).toBeChecked();
//uncheck the checkbox with the name of javascript
await checkboxJavascript.uncheck();
// ASSERT that the checkbox is unchecked
await expect(checkboxJavascript).not.toBeChecked();



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



