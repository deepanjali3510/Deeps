import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const drag = await page.locator('div#draggable')
  const drop = await page.locator ('div#droppable')

  //method 1 

//   await drag.hover()
//   await page.mouse.down()

//   await drop.hover()
//   await page.mouse.up()

  //method 2

  await drag.dragTo(drop)

  await page.waitForTimeout(3000)


})