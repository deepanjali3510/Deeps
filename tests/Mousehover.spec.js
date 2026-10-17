import {test, expect} from '@playwright/test'

test('MouseHover',async({page})=>{

      await page.goto('https://www.amazon.in/')

      const hello = await page.locator('#nav-link-accountList-nav-line-1')
      const account = await page.locator('//span[text()="Your Account"]')

      //mouse hover

      await hello.hover()

     await page.waitForTimeout(3000)

     await account.hover()

     await account.click()
     await page.waitForTimeout(3000)


})