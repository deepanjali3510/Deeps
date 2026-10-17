import {test, expect} from '@playwright/test'

test('Auto suggest',async({page})=>{
   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   await page.locator("input#autocomplete").fill("au")
   await page.waitForSelector('//li[@class="ui-menu-item"]//div')

   const conutryoption = await page.$$('//li[@class="ui-menu-item"]//div')

   for(let option of conutryoption){
     const value = await option.textContent();
     console.log(value)
    if(value.includes('Australia')){
        await option.click();
        break;
    }

    await page.waitForTimeout(5000)
   }
})


















