// import {test,expect} from '@playwright/test'

// test('Simple alert',async({page})=>{
//    await page.goto('https://testautomationpractice.blogspot.com/')

//    // Enabling dialog simple alert

//    page.on('dialog', async dialog =>{
//       expect(dialog.type()).toContain('alert')
//       expect(dialog.message()).toContain('I am an alert box!')
//       await dialog.accept()

//    });
//    await page.locator('//button[text()="Simple Alert"]').click()

//    await page.waitForTimeout(3000)
// })

// import {test,expect} from '@playwright/test'

// test('Confirm Alert', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // Enabling dialog window handler

//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('confirm');
//         expect(dialog.message()).toContain('Press a button!');
//         await dialog.accept(); // close by using OK button
//         //await dialog.dismiss(); // close by using Cancel Button
//     });

//     await page.locator('//button[text()="Confirmation Alert"]').click();
//     await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')

//     await page.waitForTimeout(4000);
//    })

import {test,expect} from '@playwright/test'

test('Prompt alert', async({page})=>{


   await page.goto('https://testautomationpractice.blogspot.com/')

   page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('prompt');
      expect(dialog.message()).toContain('Please enter your name:');
      expect(dialog.defaultValue('Harry Potter'));
      await dialog.accept('Rahul') //close by using OK button

   });

    await page.locator('//button[text()="Prompt Alert"]').click()
    await expect(page.locator('#demo')).toHaveText('Hello Rahul! How are you today?')

  
   await page.waitForTimeout(5000)

})

