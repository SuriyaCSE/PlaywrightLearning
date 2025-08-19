import{test} from '@playwright/test';

test.describe("Upload Tests", () => {

    test("Upload a file", async ({ page }) => {

        await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

        // await page.setInputFiles("input[type='file']",["Practice Files/Sample 1.jpg", 
        //                                 "Practice Files/Sample 2.jpg"]);
        // await page.waitForTimeout(2000);

        const [upload] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("input[type='file']")
        ]);
      
        const multiple = upload.isMultiple(); 
        upload.setFiles(["Practice Files/Sample 1.jpg", "Practice Files/Sample 2.jpg"]);
        await page.waitForTimeout(2000);


    });

})

