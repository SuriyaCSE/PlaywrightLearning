import { Page } from "@playwright/test";

export default class SpecialHotPage{


    constructor(public page: Page) { }

        async addFirstProductToTheCart() { 
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        
        await this.page.locator("(//button[@title='Add to Cart'])")
            .nth(0).click();
    }

    // async isToastVisible() { 
    //     // await this.page.waitFor
    //     const toast = this.page.locator("//a[.='View Cart ']");
    //     await toast.waitFor({state:"visible"})
    //     return toast;
    // }


    // My functions

    async clickOnContinue()
    {
        await this.page.click("//a[@class='btn btn-primary']")
    }

    async clickOnDesktop() {
       await this.page.click("//img[@alt='Desktops']");
    }

    async clickOnMyFirstProductAndAddToCart() {

            await this.page.hover("(//img[@class='lazy-load'])[1]"),
            await this.page.click("(//button[@title='Add to Cart'])[1]")
    }

    async isToastVisible() { 
        const toast = this.page.locator("toast-body");
        await toast.waitFor({state:"visible"})
        return toast;
    }

    async clickOnCheckOut() {
        await this.page.click("//a[normalize-space(text())='Checkout']");
    }

    async clickOnContinueShopping()
    {
        await this.page.click("(//a[contains(@class,'btn btn-lg')])[1]");  
    }
}