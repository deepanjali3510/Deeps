// const { test, expect } = require('@playwright/test');

// test('Handling Tables', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const table = await page.locator('#productTable');

//     // 1) Total Number of rows and columns 
//      const columns = await table.locator('thead tr th');
//     console.log("Number of Columns : ", await columns.count());
//     expect(await columns.count()).toBe(4);
//     //await expect(columns).toHaveCount(4);

//     const rows = await table.locator('tbody tr');
//     console.log("Number of Rows :", await rows.count());
//     expect(await rows.count()).toBe(5);
//      //await expect(rows).toHaveCount(5)


//     // 2) Select CheckBox for product 4

//     // const matchedRows = rows.filter({
//     //     has: page.locator('td'),
//     //     hasText: 'Smartwatch'
//     // });

//     // const checkBox = matchedRows.locator('input').first();
//     // await checkBox.check();

//     //await matchedRows.locator('input').check()  // not recommened

//       await page.waitForTimeout(5000);

//     // 3) Select multiple products by re-usable function

//         await selectProducts(rows, page, 'Smartphone');
//         await selectProducts(rows, page, 'Laptop');
//         await selectProducts(rows, page, 'Tablet');
//         await selectProducts(rows, page, 'Wireless Earbuds');

//         await page.waitForTimeout(2000);

//           // 4) Print all Product details using loop

//     for (let i = 0; i < await rows.count(); i++) {
//         const row = rows.nth(i);
//         const tds = row.locator('td')

//         for (let j = 0; j < await tds.count() - 1; j++) {
//             console.log(await tds.nth(j).textContent());
//         }
//     }

//        // 5) Read all the data from the table

//     const pages = await page.locator('.pagination li a');
//     console.log("Number of Pages in the table : ", await pages.count());

//     for (let p = 0; p < await pages.count(); p++) {
//         if (p > 0) {
//             await pages.nth(p).click();
//         }
//         for (let i = 0; i < await rows.count(); i++) {
//             const row = rows.nth(i);
//             const tds = row.locator('td')

//             for (let j = 0; j < await tds.count() - 1; j++) {
//                 console.log(await tds.nth(j).textContent());
//             }
//         }
//      }
//     });

//     async function selectProducts(rows, page, name){
//         const matchedRows = rows.filter({
//             has: page.locator('td'),
//             hasText: name
//         });
//         await matchedRows.locator('input').check();
        
//     }




// import{test, expect} from '@playwright/test'
// test('Handling tables', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     const table = await page.locator('#productTable');
    
//     //1. Total no of rows and columns
//     const columns = await table.locator('thead tr th');
//     console.log("No of columns: ",await columns.count());
//     expect(await columns.count()).toBe(4);
//     //await expect(columns).toHaveCount(4)

//     const rows = await table.locator('tbody tr');
//     console.log("No of rows: ", await rows.count());
//     expect(await rows.count()).toBe(5);

    // 2. Select checkBox for Smartwatch

    // const MatchedRows = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // });

    // const CheckBox = MatchedRows.locator('input').first();
    // await CheckBox.check();

    // await page.waitForTimeout(5000);


//    // 3. Select multiple products by re usable function 
//     await selectProducts(rows, page, 'Smartphone');
//     await selectProducts(rows, page, 'Laptop');
//     await selectProducts(rows, page, 'Tablet');
//     await selectProducts(rows, page, 'Wireless Earbuds');

//     await page.waitForTimeout(5000);

//     //4. Print all products details using loop

//     for (let i = 0; i < await rows.count(); i++){
//         const row = rows.nth(i);
//         const tds = row.locator('td')

//         for (let j=0; j< await tds.count() -1; j++){
//             console.log(await tds.nth(j).textContent());
//         }
//     }
    

//     //5 Pages using pagination

//     const pages = await page.locator('.pagination li a');
//     console.log("Number of Pages in the table : ", await pages.count());
     
//     for (let p = 0; p < await pages.count(); p++){
//         if(p > 0){
//             await pages.nth(p).click();
//         }
//         for (let i =0; i <await rows.count();i++){
//             const row = rows.nth(i);
//             const tds = row.locator('td')

//             for (let j = 0; j< await tds.count() -1; j++){
//                 console.log(await tds.nth(j).textContent());
//             }
//         }
//             }

   

// })

// async function selectProducts(rows, page, name){
//     const MatchedRows = rows.filter({
//         has: page.locator('td'),
//         hasText: name
//     });
//     await MatchedRows.locator('input').check();

// }


/*import{test, expect} from '@playwright/test'

test('Handling test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')
    
    //1) Total No of rows and columns

    const columns = await table.locator('thead tr th');
    console.log("No of columns:" , await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr')
    console.log("No of rows:" , await rows.count());
    expect(await rows.count()).toBe(5)

    //2. Select CheckBox for Smartwatch

    // const matchedRows = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // });

    // const checkBox = matchedRows.locator('input').first();
    // await checkBox.check();

    // await page.waitForTimeout(5000)

    // Select multiple products by re-usable function
    
    await selectProducts(rows,page, 'Smartphone');
    await selectProducts(rows,page, 'Laptop');
    await selectProducts(rows,page, 'Tablet');
    await selectProducts(rows,page, 'Wireless Earbuds');

    await page.waitForTimeout(5000)

    //4.  Print all the product details using loop
    for (let i =0; i < await rows.count(); i++ ){
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j< await tds.count() - 1 ;j++){
            console.log(await tds.nth(j).textContent())
        }
    }

    // Pages using pagination

    const pages = await page.locator('.pagination li a');
    console.log("No of pages in table: ", await pages.count());

    for (let p = 0; p < await pages.count(); p ++){
        if(p>0){
            await pages.nth(p).click();
        }
        for (let i =0; i < await rows.count(); i++ ){
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j< await tds.count() - 1 ;j++){
            console.log(await tds.nth(j).textContent())
        }
    }

        
    }




});

async function selectProducts(rows, page, name){

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    });

    await matchedRows.locator('input').check();


}*/




/*
import{test,expect} from '@playwright/test'

test('Handling tables', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable')
    
    // 1. total no of rows and columns
    const column = await table.locator('thead tr th');
    console.log("No of columns: ", await column.count());
    expect(await column.count()).toBe(4)

    const rows = await table.locator('tbody tr');
    console.log("No of rows: ", await rows.count())
    expect(await rows.count()).toBe(5)

    // 2. select the checkbox for smartwatch

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    });
    const checkBox = matchedRows.locator('input').first()
    await checkBox.check()

    await page.waitForTimeout(3000)

    //3. Select multiple products by re usable function

    await selectProducts(rows,page,'Smartphone')
    await selectProducts(rows,page,'Laptop')
    await selectProducts(rows,page,'Tablet')
    await selectProducts(rows,page,'Wireless Earbuds')

    await page.waitForTimeout(3000)

    // 4. Print all product details using loop
    for (let  i =0; i< await rows.count(); i++){
        const row = rows.nth(i);
        const tds = row.locator('td')

        for (let j =0; j < await tds.count() -1 ; j++){
            console.log(await tds.nth(j).textContent())

        }
    }

    // 5. print all the data using pagination
    const pages = await page.locator('#pagination li a');
    console.log("No of pages: ", await pages.count())

    for (let p= 0; p < await pages.count(); p++){
        if (p >0){
            await pages.nth(p).click()
        }
         for (let  i =0; i< await rows.count(); i++){
        const row = rows.nth(i);
        const tds = row.locator('td')

        for (let j =0; j < await tds.count() -1 ; j++){
            console.log(await tds.nth(j).textContent())

        }
    }

    }

});

async function selectProducts(rows, page, name){
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await matchedRows.locator('input').check()
}

*/



import {test,expect} from '@playwright/test'

test('Tables', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table =  await page.locator('#productTable');
    
    //1. Total no of rows and columns
    const columns = await table.locator('thead tr th');
    console.log("No of columns:",await  columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr');
    console.log("No of rows:", await rows.count());
    await expect(rows).toHaveCount(5)



    //2.Checked the one product

    const CheckBox = rows.filter({
        has: page.locator('td'),
        hasText:'Smartwatch'
    });

    const checkedCheckBox = CheckBox.locator('input').first()

   // await CheckBox.locator('input').check()
    await checkedCheckBox.check();

    await page.waitForTimeout(3000)


    // 3.Select Multiple checkBox

    await selectProducts(rows,page,'Smartphone');
    await selectProducts(rows,page,'Laptop');
    await selectProducts(rows,page,'Tablet');
    await selectProducts(rows,page,'Wireless Earbuds');

    await page.waitForTimeout(3000)
    
//     //4. Print all products

//     for( let i = 0; i < await  rows.count(); i ++){
//         const row = rows.nth(i)
//         const tds = row.locator('td')

//         for (let j = 0; j< await tds.count() - 1; j++){
//             console.log(await tds.nth(j).textContent());
//         }
//     }


//     //5. print all pages

//     const pages = await page.locator('.pagination li a');
//     console.log("No of pages: ", await pages.count())

//     for(let p = 0 ; p < await pages.count(); p ++){
//         if( p > 0){
//             await pages.nth(p).click();
//         }

//         for( let i = 0; i < await  rows.count(); i ++){
//         const row = rows.nth(i)
//         const tds = row.locator('td')

//         for (let j = 0; j< await tds.count() - 1; j++){
//             console.log(await tds.nth(j).textContent());
//         }
//     }

        
//     }

    
// })

async function selectProducts(rows,page,name){

    const CheckBox = rows.filter({
        has: page.locator('td'),
        hasText: name
    });

    await CheckBox.locator('input').check()

}

})







































































