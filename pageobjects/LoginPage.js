class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Login']");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");

}

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await this.page.waitForSelector('#userEmail', { state: 'visible', timeout: 15000 });
}

async validLogin(username,password)
{
    await this.userName.fill(username);
    await this.password.fill(password);
    await Promise.all([
        this.signInbutton.click(),
        this.page.waitForURL('**/dashboard/**', { timeout: 30000 })
    ]);
    await this.page.locator('.card-body b').first().waitFor({ state: 'visible', timeout: 20000 });
}

}
module.exports = {LoginPage};