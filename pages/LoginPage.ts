import { Locator, Page, expect } from "@playwright/test";


export class LoginPage{

   readonly page: Page;
   readonly userNameTextField : Locator;
   readonly passwordTextField : Locator;
   readonly loginButton : Locator;
   readonly pageTitle: Locator;
   readonly errorStatement : Locator;

    constructor(page:Page){
        this.page = page;
        this.userNameTextField = page.locator("#user-name");
        this.passwordTextField = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.pageTitle = page.locator(".app_logo");
        this.errorStatement = page.locator("h3[data-test='error']");
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(userName:string, password:string){
        await this.userNameTextField.fill(userName);
        await this.passwordTextField.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfullLogin(pageTitleText:string){
        await expect(this.pageTitle).toHaveText(pageTitleText);
    }

    async verifyUnSuccessfullLogin(errorText:string){
        await expect(this.errorStatement).toBeVisible();
        await expect(this.errorStatement).toContainText(errorText);
    }
}