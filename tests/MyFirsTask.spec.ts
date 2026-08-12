import { test, expect } from '@playwright/test';

test('add to cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.getByText('Add to cart').first().click();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await expect(page.locator('#cartModal')).toContainText('Your product has been added to cart.');
});

test('login with invalid credentials', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('ahmedelbanna@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass0rd');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
});