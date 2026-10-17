import {test,expect} from '@playwright/test'

let page;

test.beforeAll(async ({browser})=>{

  page = await browser.newPage();
//login
  await page.goto('https://demoblaze.com/index.html')

  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('irshath');
  await page.locator('#loginpassword').fill('test"23')
  await page.click('//button[text()="Log in"]')
})


//logout 
test.afterAll(async()=>{
  await page.locator('#logout2').click()
})

test('Home page', async ()=>{

  const products =  await page.locator('.card-title');
  await expect(products).toHaveCount(9)

  await page.waitForTimeout(3000)

})

test('Add products', async()=>{
  await page.locator('//a[text()="Iphone 6 32gb"]').click()
  await page.locator('//a[text()="Add to cart"]').click()

  page.on('dialog', async dialog =>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept();
  });
    await page.waitForTimeout(3000)


})

