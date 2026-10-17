import {test, expect} from '@playwright/test'

test('Multiple files ',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    // await page.locator('#filesToUpload').setInputFiles('tests/Upload files/Java scipt NOTES.pdf')

    
    //multiple files 

    await page.locator('#filesToUpload').setInputFiles(['tests/Upload files/EPFO - Page 1.pdf','tests/Upload files/interview-transcript-2026-09-17-18-33-16.pdf','tests/Upload files/Java scipt NOTES.pdf'])
    
    await page.waitForTimeout(2000)
    
    

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('EPFO - Page 1.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('interview-transcript-2026-09-17-18-33-16.pdf')
    expect (await page.locator('#fileList li:nth-child(3)')).toHaveText('Java scipt NOTES.pdf')

    await page.waitForTimeout(3000)

})