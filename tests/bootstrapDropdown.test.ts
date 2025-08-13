import  {test} from "@playwright/test";


test("Bootstrap Dropdown Test", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");


    async function selectCountry(countryName: string) {

            await page.click("#country+span");
            await page.locator("ul#select2-country-results").locator
            ('li',
                {
                hasText: countryName
                }
            ).click();
    }
    await selectCountry("India");
    await selectCountry("United States");
    await selectCountry("New Zealand");
    await page.waitForTimeout(2000);
})