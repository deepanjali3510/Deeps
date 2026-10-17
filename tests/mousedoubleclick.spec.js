import {test, expect} from '@playwright/test'

test('MouseHover',async({page})=>{

      await page.goto('https://testautomationpractice.blogspot.com/')

      const copybutton = await page.locator('//button[text()="Copy Text"]')

      //double click

      await copybutton.dblclick()

      const field2 = await page.locator('#field2')
      await expect(field2).toHaveValue('Hello World!')


      await page.waitForTimeout(3000)

})