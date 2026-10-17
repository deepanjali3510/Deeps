import {test, expect} from '@playwright/test'

test('home Page', async ({page}) => {
    await page.goto('https://www.demoblaze.com/')

    //tilte

    const pagetile = await page.title() //store  current title
    console.log(pagetile) //print the title anme
    await expect(page).toHaveTitle('STORE') //VALIDATE THE TITLE
  
    //url 
    const pageurl = await page.url()
    console.log(pageurl)
    await expect(page).toHaveURL('https://www.demoblaze.com')


    await page.waitForTimeout(3000)

})