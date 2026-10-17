// const { Given, When, Then } = require('@cucumber/cucumber');

//  Given('user launches application', async function () {

//      console.log("Application launched");

//  });

//  When('user enters username and password', async function () {

//      console.log("Entered credentials");

//  });

//  Then('homepage should display', async function () {

//      console.log("Homepage displayed");

//  })


const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');
 setDefaultTimeout(60 * 1000);


 const { chromium } = require('@playwright/test');

 let browser;
 let page;

 Given('user launches application', async function () {

     browser = await chromium.launch({
         headless:false
     });

     page = await browser.newPage();

     await page.goto('https://opensource-demo.orangehrmlive.com/');
 });

 When('user enters username and password', async function () {

     await page.locator('input[name="username"]').fill('Admin');

     await page.locator('input[name="password"]').fill('admin123');

     await page.locator('button[type="submit"]').click();

 });

 Then('homepage should display', async function () {

     await page.waitForTimeout(3000);

     await browser.close();
 });