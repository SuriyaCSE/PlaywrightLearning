import  { test as mytest} from '@playwright/test';

import RegisterPage from '../pageObjectModel/RegisterPage';
import HomePage from '../pageObjectModel/homePage';
import LoginPage from '../pageObjectModel/loginPage';
import SpecialHotPage from '../pageObjectModel/specialHotPage';

type obj = {

    registerpage : RegisterPage;
    loginpage : LoginPage;
    homepage : HomePage;
    specialhotpage : SpecialHotPage;

}

export const test = mytest.extend<obj>({

    registerpage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homepage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    specialhotpage: async ({ page }, use) => {
        await use(new SpecialHotPage(page));
    }
})



export const expect = test.expect;