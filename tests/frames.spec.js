// //singleframe
// import {test,expect} from '@playwright/test'

// test('single frames', async ({page}) =>{
  
//     await page.goto('https://demo.automationtesting.in/Frames.html')

//     //total frames

//     const Allframes = page.frames()
//     console.log("No.of frames :", Allframes.length)
    

//     //name , url
//     const frame = page.frame({name:"SingleFrame"})
//     const frames = page.frame({url: "https://demo.automationtesting.in/SingleFrame.html"})

//     await frame.locator('//input[@type="text"]').fill("Hello world")

//     //approcah - 2

//     // const inputbox = page.frameLocator('#SingleFrame').locator('//input[@type="text"]')
//     // await inputbox.fill("Good morning")

//     await page.waitForTimeout(3000)

// })


// //multi-frames 

// import {test,expect} from '@playwright/test'

// test('single frames', async ({page}) =>{
  
//     await page.goto('https://demo.automationtesting.in/Frames.html')

//     await page.locator('[href="#Multiple"]').click()
    
//     //parent frame
//     const Parentframe = page.frame ({ url : 'https://demo.automationtesting.in/MultipleFrames.html'})


//     //child frame 

//     const childframe = Parentframe.childFrames()
//     await childframe[0].locator('[type="text"]').fill("Hello All!!!")

//     await page.waitForTimeout(3000)
// })    


//single frame 

//  import {test,expect} from '@playwright/test'

//  test('single frames', async ({page}) =>{
    
//    await page.goto('https://demo.automationtesting.in/Frames.html')

//    //counting frames 
//    const Allframes = page.frames()
//    console.log('No.of farmes: ',Allframes.length)
   
//    //approach - 1
//    // //name, url

//    // const frame = page.frame({name : 'SingleFrame'})
//    // const frames= page.frame({url: 'https://demo.automationtesting.in/SingleFrame.html'})
   
//    // //input box aa fill panirkan
//    // await frame.locator('//input[@type="text"]').fill('hello world')
//    // console.log(frame)

//    //approach - 2

//    const inputbox = page.frameLocator('iframe[name="SingleFrame"]').locator('//input[@type="text"]')
//    await inputbox.fill('Good morning')
//    console.log(inputbox)
//  })

 //multi frames

 
 import {test,expect} from '@playwright/test'

 test('multi frames', async ({page}) =>{
    
   await page.goto('https://demo.automationtesting.in/Frames.html')

   await page.locator('[href="#Multiple"]').click()

   //parent frame

   const parentframe = page.frame({url: 'https://demo.automationtesting.in/MultipleFrames.html'})
      
  //child farme 

  const childframe = parentframe.childFrames()
  await childframe[0].locator('//input[@type="text"]').fill('Helloooo All!!!!!!!!!!')

  
   })