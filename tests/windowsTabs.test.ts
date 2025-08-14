import {expect, test} from '@playwright/test';

test('Windows', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#1')
    ]);

   // newWindow.fill('#name', 'Suriya');
    
})


test.only('Multiple Windows', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.click("//a[contains(text(),'Follow Twitter & Facebook')]")
        
    //     // Adjusted to use double click for the Twitter linka
    // ]);
    // await newWindow.waitForLoadState();
    // await page.waitForTimeout(2000);


     const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();
    

    const NoofWindows = multiPage.context().pages();
    console.log(`Number of windows opened: ${NoofWindows.length}`);
    
    NoofWindows.forEach(tab => {
        console.log(`Tab title: ${tab.url()}`);
    });
});
