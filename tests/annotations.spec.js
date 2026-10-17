import {test, expect} from '@playwright/test'

//ONLY

// test.only('test 1', async({page})=>{
//     console.log("This is test 1")
// })

// test('test 2', async({page})=>{
//     console.log("This is test 2")
// })

// SKIP

// test.skip('Test 2', async ({ page }) => {
//     console.log("This is Test 2");

// });

// test('Test 3', async ({ page, browserName }) => {
//     console.log("This is Test 3");
//     if (browserName === 'firefox') {
//         test.skip();
//     }
// })

// FIX ME

// test('Test 4', async ({ page }) => {
//     test.fixme()
//     console.log("This is Test 4");
// });

// // FAIL

// test('Test 5', async ({ page }) => {
//     test.fail(); // expected
//     console.log("This is Test 5");
//     expect(1).toBe(0);  // actual 
//     //expect(1).toBe(0);
// });

// test('Test 6', async ({ page, browserName }) => {
//     console.log("This is Test 6");
//     if (browserName === 'chromium') {
//         test.fail(); //expected
//     }
// });


 //SLOW


test('Add products to cart', async({page})=>{
    test.slow()


    await page.goto('https://demoblaze.com/index.html')

    //login page
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('irshath')
    await page.locator('#loginpassword').fill('test"23')
    await page.click('//button[text()="Log in"]');
})


