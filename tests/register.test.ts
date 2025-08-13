import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Sample');

  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Mail');

  await page.getByRole('textbox', { name: 'E-Mail*' }).click();
  await page.getByRole('textbox', { name: 'E-Mail*' }).fill('Samplerun@gmail.com');

  await page.getByRole('textbox', { name: 'Telephone*' }).click();
  await page.getByRole('textbox', { name: 'Telephone*' }).fill('1234567890');
  //await page.mouse.wheel(0, 100);
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('Pass123');

  await page.getByRole('textbox', { name: 'Password Confirm*' }).click();
  await page.getByRole('textbox', { name: 'Password Confirm*' }).fill('Pass123');


  await page.waitForTimeout(2000)
  await page.getByText('I have read and agree to the').check();
  await page.getByRole('button', { name: 'Continue' }).click();
});