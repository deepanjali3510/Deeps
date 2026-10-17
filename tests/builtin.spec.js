import {test, expect} from '@playwright/test'

test('Builtin Locators' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    //page-goto - go to this page

    //page.getByAltText() to locate an element, usually image, by its text alternative.
    
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //page.getByPlaceholder() to locate an input by placeholder.

    const username = await page.getByPlaceholder('Username').fill('Admin')
    const password = await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole() to locate button,textbox,headings

    await page.getByRole("button", {type:"submit"}).click()

    //getbytext

    //const names = await page.locator('.oxd-userdropdown-name')
    const names= await getByText('Dawn Rosario')
    await expect(names).toBeVisible()

    //getby label

    await page.getByLabel('Employee Name')

})