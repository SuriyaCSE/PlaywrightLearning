import {test, expect} from '@playwright/test';
import moment from 'moment';

test("Date Picker Test", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    let date = '2003-04-03'

    await page.fill('#birthday', date);
    await page.waitForTimeout(2000);
    
});


test.only("date with moment", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"); 

    await selectDate(3, "April 2023");

    await page.reload();

    await selectDate(19, "August 2025");

    await page.reload();

    await selectDate(3, "April 2027");

      
    
    async function selectDate(date: number, monthYear: string){

        page.click("//input[@placeholder='Start date']");
    
        const mmmmYYYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
    
        // await prev.click();
        // await page.click("//td[@class='day'][text()='4']");
        // await page.waitForTimeout(2000);
        
        const month =  moment(monthYear, "MMMM YYYY").isBefore();
    
       while(await mmmmYYYY.textContent() !== monthYear) {
            if (month) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day' and text()='${date}']`);;
    
        console.log("Selected date: ", await page.inputValue("//input[@placeholder='Start date']"));
}
});
