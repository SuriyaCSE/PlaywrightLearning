import {chromium, test} from '@playwright/test'

test('login test', async () => {
 
    const browser = await chromium.launch(
        {
            headless: false,
        }
    );
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("text=Login")
    await page.fill("input[name='email']", "Trailrun@gmail.com")
    await page.fill("input[name='password']", "Pass123$")
    await page.waitForTimeout(5000)
    await page.click("input[value='Login']");
});