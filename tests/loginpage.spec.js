
const { test, expect } = require('@playwright/test');
const { CartPage } = require('../pages/Cartpage');
// const { HomePage } = require('../pages/Homepage');
// // const { LoginPage } = require('../Pages/Loginpage');


// // test('POM', async ({ page }) => {

// //     // LOGIN PAGE
// //     const login = new LoginPage(page)
// //     await login.gotoUrl();
// //     await login.login('irshath', 'test"23');
// //     await page.waitForTimeout(3000);

// // })


//     // HOME PAGE
//     const home = new HomePage(page);
//     await home.addProducts('Sony xperia z5');
//     await page.waitForTimeout(2000);
//     await home.goToCart();


test('POM', async({page})=>{

    //CART PAGE
    const cart = new CartPage(page)
    await page.waitForTimeout(2000);
    const status = await cart.checkProduct('Sony xperia z5');
    await expect(status).toBe(true);


})