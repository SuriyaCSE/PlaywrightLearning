import { expect, test } from "@playwright/test";

test("Alerts Test accept", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on('dialog', async (alert) => {
        const msg = alert.message();
        console.log(msg);
        await alert.accept();
    })

    await page.getByRole('button', { name: 'Click me' }).nth(0).click();
})
   
test("Alerts Test dismiss", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
     page.on('dialog', async (alert) => {
        const msg1 = alert.message();
        console.log(msg1);
        await alert.dismiss();
    })

    await page.getByRole('button', { name: 'Click me' }).nth(1).click();                
    expect(page.locator('id=confirm-demo')).toContainText('Cancel');
    
})

test("Alerts Test Prompt", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on('dialog', async (alert) => {
       
        const msg2 = alert.defaultValue();
        console.log(msg2);
        await alert.accept('Suriya');
    })

    await page.getByRole('button', { name: 'Click me' }).nth(2).click();
    expect(page.locator('id=prompt-demo')).toContainText('Suriya');
})


test.only("Modal alert", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"); 
    await page.locator("//button[@data-target='#myModal']").click();
    await page.locator("(//button[@data-dismiss='modal'])[3]").click();
})


