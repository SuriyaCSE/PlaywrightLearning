
import { expect, test } from '../pomFixtures/addToCartFixture';

import * as data from '../JsonData/userDetails.json';


test.describe("First Page Object Demo", async () => {

    test("Register test_01", async ({ page, baseURL, registerpage}) => {

        // console.log('TITLE: ' + testInfo.title);
        await page.goto(`${baseURL}route=account/register`);
        await registerpage.enterEmail(data.email);
        await registerpage.enterTelephone(data.telephoneNumber)
        await registerpage.enterFirstName(data.firstName);
        await registerpage.enterPassword(data.password);
        await registerpage.enterConfirmPassword(data.password);
        expect(registerpage.isSubscribeChecked()).toBeChecked();
        await registerpage.clickTermandConditon();
        await registerpage.clickContinueToRegister();
        await registerpage.enterLastName(data.lastName)
       // console.log('STATUS: ' + testInfo.status);


    })

    test("Login test_02", async ({ page, baseURL, loginpage}) => {
        await page.goto(`${baseURL}route=account/login`)
        await loginpage.enterEmail(data.email);
        await loginpage.enterLoginPassword(data.password);
        await loginpage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test.only("Add to cart test_03", async ({ page, baseURL, loginpage, homepage, specialhotpage}) => {
        
       
        await page.goto(`${baseURL}route=account/login`)
        await loginpage.login(data.email, data.password);
        await homepage.clickOnSpecialHotMenu();
        
        // await special.addFirstProductToTheCart();
        // const isCartVisible = await special.isToastVisible();
        // expect(isCartVisible).toBeVisible();

        await specialhotpage.clickOnContinue();
        await specialhotpage.clickOnDesktop();
        await specialhotpage.clickOnMyFirstProductAndAddToCart(); 
        await specialhotpage.clickOnCheckOut();  
        await specialhotpage.clickOnContinueShopping();

   })
})
