// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {


//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

//     //radio button click 

//     //await page.locator('[value="radio1"]').check() // check = means clicking the round button

//     await page.check('[value="radio1"]')

//     await page.waitForTimeout(3000)


// })

//checkbox

import { test, expect } from '@playwright/test';

test('Checkbox ', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //single box 

    await page.locator('#checkBoxOption1').check()

    //validate 
    expect(await page.locator('#checkBoxOption1')).toBeChecked()

    expect(await page.locator('#checkBoxOption1').isChecked()).toBeTruthy()
    
    //uncheck - un click the element
    await page.locator('#checkBoxOption1').uncheck()

    expect(await page.locator('#checkBoxOption1')).not.toBeChecked

    expect(await page.locator('#checkBoxOption1').isChecked()).toBeFalsy()



    await page.waitForTimeout(3000)




//multiple choice 

const multichoice = [
   '#checkBoxOption1',
   '#checkBoxOption2',
   '#checkBoxOption3'
]

for(const result of multichoice){
    await page.locator(result).check()
}

await page.waitForTimeout(3000)

for(const result of multichoice){
    if(await page.locator(result).isChecked()){
      await page.locator(result).uncheck() }
        
}

})



