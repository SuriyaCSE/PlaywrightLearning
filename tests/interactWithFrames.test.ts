import { expect, test } from "@playwright/test";
import { text } from "stream/consumers";

test("Interact with Frames Test", async ({ page }) => {

        await page.goto("http://letcode.in/frame")
        const allframes = await page.frames();
        console.log("Total Number of Frames: ", allframes.length);

        // const frame = await page.frame("firstFr")
        // await frame?.locator("//input[@name='fname']").fill("Suriya");
        // await frame?.locator("//input[@name='lname']").fill("Vijayaragunathan");

        // await page.waitForTimeout(2000);


        const frame = await page.frameLocator("#firstFr")

        // frame.locator("//input[@name='fname']").fill("Suriya");
        // frame.locator("//input[@name='lname']").fill("Vijayaragunathan");
        // await page.waitForTimeout(2000);

        // expect(await frame?.locator("//p[@class='title has-text-info']").textContent()).toContain("Suriya");


        const innerFrame = await frame.frameLocator("iframe[src='innerframe']");
        await innerFrame.locator("//input[@name='email']").fill("Suriya@gmail.com");

        
        
       // expect(await innerFrame?.locator("//input[@name='email']").textContent()).toContain("Suriya");

        await page.waitForTimeout(2000);



       
})
