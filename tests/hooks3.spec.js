const { test, expect } = require('@playwright/test')

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
//login
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click('//button[text()="Log in"]');

});
//logout
test.afterEach(async () => {

    await page.locator('//a[@id="logout2"]').click();
});

test1('Home page Test', async () => {

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);
});

test2('Add Products to cart', async () => {

    await page.locator('//a[text()="Sony xperia z5"]').click();
    await page.locator('//a[text()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });
        await page.waitForTimeout(5000); 


});