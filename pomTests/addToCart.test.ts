
import { expect, test } from "@playwright/test";

import LoginPage from "../pageObjectModel/loginPage";
import HomePage from "../pageObjectModel/homePage";
import SpecialHotPage from "../pageObjectModel/specialHotPage";
import RegisterPage from "../pageObjectModel/RegisterPage";

const firstName = "Suriya";
const lastName = "Vijay";
const telephoneNumber = "9876543210";
const email = "Suriyademo@gmail.com";
const password = "Suriya@123";


test.describe("First Page Object Demo", async () => {

    test("Register test_01", async ({ page, baseURL }, testInfo) => {

        console.log('TITLE: ' + testInfo.title);

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName(firstName);
        await register.enterLastName(lastName)
        await register.enterEmail(email);
        await register.enterTelephone(telephoneNumber)
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditon();
        await register.clickContinueToRegister();
        console.log('STATUS: ' + testInfo.status);


    })

    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test.only("Add to cart test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        
        // await special.addFirstProductToTheCart();
        // const isCartVisible = await special.isToastVisible();
        // expect(isCartVisible).toBeVisible();

        await special.clickOnContinue();
        await special.clickOnDesktop();
        await special.clickOnMyFirstProductAndAddToCart(); 
        await special.clickOnCheckOut();  
        await special.clickOnContinueShopping();

    })
})
