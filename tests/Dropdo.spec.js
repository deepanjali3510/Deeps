// import {test, expect} from '@playwright/test'

// test('Dropdown', async ({page}) => {


//     await page.goto('https://testautomationpractice.blogspot.com/') //go to this website 

//    //select option of the dropdown

//    //await page.locator('#country').selectOption({label: 'United Kingdom'})
//    //await page.locator('#country').selectOption('United Kingdom')
//    //await page.locator('#country').selectOption({value: 'usa'})
//    //await page.locator('#country').selectOption({index:3})
//    await page.selectOption('#country', 'India')

//    //assertion

//    //check no.of option i n drop down method - 1

//    const options= await page.locator('#country option')
//    await expect(options).toHaveCount(10)

//    //check no.of option i n drop down method - 2

//    const option = await page.$$('#country option')
//    console.log(option.length)
//    await expect(option.length).toBe(10)

//    //check the presence of options available in dropdown

//    const content = await page.locator('#country').textContent()
//    await expect(content.includes('Italy')).toBeTruthy()
//    await page.waitForTimeout(3000)
// })

//multiple dropdown

// import {test, expect} from '@playwright/test'

// test('Multiple Dropdown', async ({page}) => {

//     await page.goto('https://testautomationpractice.blogspot.com/') 

//     //selct multiple options

//     await page.selectOption('#colors',{colors:'Green',colors: 'Yellow'})[]
//     // await page.locator('#colors').selectOption['Red','Blue','Green','Yellow'])
   
//     //assertion 
//    const options= await page.locator('#colors option')
//    await expect(options).toHaveCount(7)



// })

//autosugggest


import {test, expect} from '@playwright/test'

test('autosuggest Dropdown', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('input#autocomplete').fill('aus')
    await page.waitForSelector('//li[@class="ui-menu-item"]//div')

    const countryoption = await page.$$('//li[@class="ui-menu-item"]//div')

    for(let option of countryoption){
        const value = await option.textContent()
        console.log(value)
    if(value.includes('Australia')){
         await option.click()
         break;
        }

    }

   await page.waitForTimeout(3000)
})