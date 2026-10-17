// const { test, expect } = require ('@playwright/test')

// test('Bulid-in', async ({page})=>{
    
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


//     // await page.goto('https://www.saucedemo.com/')

//     //getByAlttext - images with text content like logo,link,button
//     const logo =  page.getByAltText('company-branding')
//     await expect(logo).toBeVisible()
    
//     //getByPlaceholder - input box or search box
//     await page.getByPlaceholder('Username').fill("Admin")
//     await page.getByPlaceholder('Password').fill("admin123")

//     //getByRole - to perform certain action on elements like button or link(anker)

//     await page.getByRole('button', {type: 'submit'}).click()

//     //getByText - to locate text content in elements
//     const name =await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
//     await expect(await page.getByText(name)).toBeVisible()
// })

