import {expect, test} from '@playwright/test';

test('Interaction Test', async ({ page }) => {

     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("Hi koushik");
    console.log('After entering data: ' + await messageInput.inputValue())

})

test("Sum", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")

    let num1 = 304
    let num2 = 3101
    await sum1input.fill("" + num1);
    await sum2input.fill("" + num2);

    await page.getByRole('button', { name: 'Get Sum' }).click();

    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)

})
    
test.only("Checkbox", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox1 = await page.getByRole('checkbox', { name: 'Click on check box' });
    //const checkbox2 = await page.locator("#check1");

    expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    expect(checkbox1).toBeChecked();
    console.log(await checkbox1.inputValue());
})