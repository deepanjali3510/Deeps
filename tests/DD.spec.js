import {test, expect} from  '@playwright/test'

test("Dropdown", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    
    await page.selectOption('#colors',['Blue','Yellow','red'])

    //Asseration

    const option = await page.locator('#colors option')
    await expect(option).toHaveCount(7)

    const options = await page.$$('#colors option')
    console.log(options.length)
    await expect(options.length).toBe(7)


    const content =  await page.locator('#colors').textContent()
    await expect(content.includes('Green')).toBeTruthy()

   await page.waitForTimeout(1000)

})
