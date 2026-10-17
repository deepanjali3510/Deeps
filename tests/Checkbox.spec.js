import{test, expect} from '@playwright/test'

test('Radio Button', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //Radio button
    await page.locator('[value="radio2"]').check()
    //await page.check('[value="radio2"]')

    await page.waitForTimeout(3000);

})



import {test,expect} from '@playwright/test'

test('CheckBox',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //Single checkBox

    await page.locator('#checkBoxOption1').check()

    expect(await page.locator('#checkBoxOption1')).toBeChecked()
    expect(await page.locator('#checkBoxOption1').isChecked()).toBeTruthy()

    await page.waitForTimeout(3000);

    await page.locator('#checkBoxOption1').uncheck()
    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()

    expect(await page.locator('#checkBoxOption1').isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)


    // Multiple checkBox

    const checkBoxLoc =  [
        '#checkBoxOption1',
        '#checkBoxOption2',
        '#checkBoxOption3'
    ];
    for (const result of checkBoxLoc){
        await page.locator(result).check()
    }
    await page.waitForTimeout(2000)

    for (const result of checkBoxLoc){
        if(await page.locator(result).isChecked()){
            await page.locator(result).uncheck()
        }
    }
    await page.waitForTimeout(2000)
})
    