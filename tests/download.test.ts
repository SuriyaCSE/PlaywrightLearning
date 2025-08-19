import{test} from '@playwright/test';

test.describe("Download Tests", () => {

    test("Download File Test", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

    await page.fill("#textbox", "Hello, I'm Suriya. This is a test file for download and delete");

    //await page.locator("#create").isEnabled();
    //await page.keyboard.press("Tab");
    await page.keyboard.press(".")
    await page.click("#create");
    // await page.click("#link-to-download");
    // await page.waitForTimeout(2000);

    const download = await Promise.all([
        page.waitForEvent('download'),
        page.click("#link-to-download")
    ])

    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);

    });

})
