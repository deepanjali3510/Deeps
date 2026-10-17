// // import {test, expect} from '@playwright/test'

// // test('homepage', async ({page}) => {
// //      await page.goto('https://www.demoblaze.com/')

// //      const TITLE= await page.title() 
// //      console.log(TITLE)
    

// //      await page.waitForTimeout(3000)

// // })

// import { test, expect } from '@playwright/test';

// test("google", async ({ page }) => {

//     await page.goto('https://www.google.com/');
//     const url = page.url();
//     console.log(url);
//     await expect(page).toHaveTitle('Google');
//     const title = await page.title();
//     console.log(title);
//     await expect(page).toHaveURL('https://www.google.com/');
// });

// test("myntra", async ({ page }) => {
//     await page.goto('https://www.myntra.com/login/password');
//     const url = await page.url();
//     console.log(url);
//     await expect(page).toHaveTitle('Myntra');
//     const title = await page.title();
//     console.log(title);
//     await expect(page).toHaveURL('https://www.myntra.com/login/password');
// });

import{test, expect} from '@playwright/test' //test-test case , expect - validation/assertion

test('Home', async ({page}) =>{ //testname-Homepage

    await page.goto('https://demoblaze.com/') //go to this page
     
    
    const title = await page.title()  //stores the title name 
    console.log(title)   //print the tile
    await expect(page).toHaveTitle('STORE') //validating the title


    const url = await page.url() //stores the url
    console.log(url) //print 
    await expect(page).toHaveURL('https://demoblaze.com/') ////validating the url

    await page.waitForTimeout(3000)


})

