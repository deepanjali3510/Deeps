import {test,expect} from '@playwright/test'

test('Date picker', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

//   await page.locator('input#datepicker').fill("23/09/2026")

    //Date picker

    const year= "2027"
    const month = "May"
    const date ="15"

       await page.click('input#datepicker') // open the calendar

    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year  && currentMonth == month){
            break;
        }
        //await page.locator('[title="Prev"]').click()  // --Previous
        await page.locator('[title="Next"]').click() //-- After
    }

     const dates = await page.$$('//a[@class = "ui-state-default"]') 
     
    //  //date selection using loops 

    //  for (const dt of dates){
    //        if (await dt.textContent() == date){
    //            await dt.click()
    //            break;

    //        }

    //  }

     //without using loops

     await page.locator(`//a[@class="ui-state-default"][text()= '${date}']`).click()



   await page.waitForTimeout(3000)


})