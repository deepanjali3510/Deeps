exports.LoginPage = 


class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.userNameInput = '//input[@id="loginusername"]';
        this.passwordInput = '[id="loginpassword"]';
        this.loginBtn = '//button[text()="Log in"]';
    }

     async gotoUrl() {
        await this.page.goto('https://www.demoblaze.com/');
    };

     async login(userName, passWord) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(passWord);
        await this.page.locator(this.loginBtn).click();
    }



}