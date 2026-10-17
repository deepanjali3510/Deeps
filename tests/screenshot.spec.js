import {test, expect} from '@playwright/test'

test('screenshot',async({page})=>{

    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    await page.screenshot({path: 'tests/screenshots/' + Date.now()+ 'Homepage.png' })

})

test('Full page',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(4000)
    await page.screenshot({path:'tests/screenshots/' + Date.now() + 'Fullpage.png',fullPage:true})
})

test.only('Element screeenshot', async({page})=>{
    await page.goto('https://www.amazon.in/Tata-Sampann-Almonds-Magnesium-Phosphorus/dp/B0DN1PXLJR/ref=lp_4860229031_1_1?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=1QGEY9GK5MVAY7Z9PDMJ&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D')

    await page.waitForTimeout(4000);
    await page.locator('//span[@id = "productTitle"]').screenshot({path:'tests/screenshots/'+ 'Element.png'})
})