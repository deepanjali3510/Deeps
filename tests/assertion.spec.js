// import {test, expect} from '@playwright/test'

// test('Assertion', async ({page}) => {

//        await page.goto('https://www.saucedemo.com/') // page.goto -navigate tp that website 
       

//        //page levell assertion 
//         await expect(page).toHaveTitle('Swag Labs')

//         //verfiy url
//        await expect(page).toHaveURL('https://www.saucedemo.com/')

//        //locators 

       
//        const username = await page.locator('#user-name')
//        const password = await page.locator('#password')
//        const login = await page.locator('#login-button')

//        //verify input field username and passwrod are visible 
        
//        await expect(username).toBeVisible();
//        await expect(password).toBeVisible();
//        await expect(login).toBeVisible();


//        //elemenst are enables and editable

//        await expect(username).toBeEnabled();
//        await expect(password).toBeEnabled();
//        await expect(login).toBeEnabled();
       
//        await expect(username).toBeEditable();
//        await expect(password).toBeEditable();
       

//        //fill - tohave values

//        await username.fill('standard_user')
//        await expect(username).toHaveValue('standard_user')


//        await password.fill('secret_sauce')
//        await expect(password).toHaveValue('secret_sauce')
       
//        //to be hidden
//        const errormessage = await page.locator('[data-test="error"]')

//        await expect(errormessage).toBeHidden()

//        await login.click()

//        //validating heading
        
//        const heading = await page.locator('//span[text()="Products"]')

//        await expect(heading).toHaveText('Products')
//        await expect(heading).toContainText('Pro')


//         await page.waitForTimeout(3000)

//         //count 

//         const productcount = page.locator('.inventory_item_name')
//         await expect(productcount).toHaveCount(6)

// })



import{test, expect} from '@playwright/test'

test('Assertion', async({page})=>{

    await page.goto('https://demoblaze.com/');


    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demoblaze.com/');
   
})