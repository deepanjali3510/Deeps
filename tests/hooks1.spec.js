import {test, expect} from '@playwright/test'

test('Homepage', async ({page}) =>{

     await page.goto('https://www.demoblaze.com/')

     //test1 
    //login
     await page.locator('#login2').click()
     await page.locator('#loginusername').fill('Deepa34')
     await page.locator('#loginpassword').fill('12345')
     await page.click('//button[text()="Log in"]')

     //validate
     const prodcuts = await page.locator('.card-title')
     await expect(prodcuts).toHaveCount(9)

     //logout 
     await page.locator('#logout2').click()


     await page.waitForTimeout(3000)


     //test 2

       // Login
      await page.locator('#login2').click()
      await page.locator('#loginusername').fill('irshath');
      await page.locator('#loginpassword').fill('test"23')
      await page.click('//button[text()="Log in"]')

      //vaidate 

      await page.locator('//a[text()="Iphone 6 32gb"]').click()
      await page.locator('//a[text()="Add to cart"]').click()

     page.on('dialog', async dialog =>{
        expect(dialog.message().toContain('Product added'))
        await dialog.accept();


     })
    
      await page.locator('#logout2').click()


     await page.waitForTimeout(3000)

})