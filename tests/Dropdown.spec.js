
import{test, expect}from '@playwright/test'

test('Dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    

    //multiple ways of seelctiing the dropdwonoption
    // await page.locator('#country').selectOption({label: 'Canada'})
    // await page.locator('#country').selectOption('India')
    // await page.locator('#country').selectOption({value:'usa'})
    // await page.locator('#country').selectOption({index:10 })
    await page.selectOption('#country','France')

    //assertion method - 1
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10)

   //method-2
    const option = await page.$$('#country option')
    console.log(option.length)
    await expect(option.length).toBe(10)

   //Check the presence of options available in dropdown

   const content = await page.locator('#country').textContent()
   await expect(content.includes('Nepal')).toBeFalsy()
   await expect(content.includes('France')).toBeTruthy()
    

})

const { test, expect } = require('@playwright/test')

test("Data entry practice", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.getByText("Data Entry Form")).toBeVisible()

    await page.locator("#name").fill("Priya")

    await page.locator("#email").fill("priya@gmail.com")

    await page.locator("#phone").fill("98765212")

    await page.locator("#textarea").fill("Chennai")

    await page.locator("#female").check()

    await expect(page.locator("#female")).toBeChecked()

    const days = ["#tuesday", "#friday", "#saturday"]

    for(const day of days){
        await page.locator(day).check()
    }

    await page.waitForTimeout(3000)

})