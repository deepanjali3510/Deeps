import { test, expect } from '@playwright/test';


test.beforeAll(async () =>{
    console.log("This is before all hook")  // run one time
})

test.afterAll(async ()=>{
    console.log("This is after all hook")
})

test.beforeEach(async ()=>{
    console.log("this is before each hook") //run for every test cases
})

test.afterEach(async()=>{
    console.log("This is after each hook")
})

test.describe('Group 1', ()=>{
test('test 1', async ({ page }) => {
       console.log('test 1 passed')
})

test('test 2', async ({ page }) => {
    console.log('test 2 passed')
})
})


test.describe.only('Group 2', ()=>{
test('test 3', async ({ page }) => {
       console.log('test 3 passed')

})

test('test 4', async ({ page }) => {
     console.log('test 4 passed')

})
})