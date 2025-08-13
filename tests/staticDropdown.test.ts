import {test, expect} from "@playwright/test";

test("Static Dropdown Test", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('select#select-demo', 
        {
            label: 'Monday',
        }
    );
    await page.waitForTimeout(2000);
});


test("Static Dropdown Testing", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('select#select-demo', 
        {
            value: 'Tuesday',
        }
    );

    await page.waitForTimeout(2000);
});


test.only("Multi select", async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption('#multi-select', [
        {
            label: 'Florida',
        },
        {
            index: 2,
        },
        {
            value: 'New York',
        }   
    ])
    await page.waitForTimeout(2000);
}) ; 