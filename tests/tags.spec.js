const { test, expect } = require('@playwright/test')

test('Test 1@smoke', async ({ page }) => {

    console.log("This is Tag Concept 1..");
});

test('Test 2@sanity', async ({ page }) => {

    console.log("This is Tag Concept 2..");
});

test('Test 3@sanity', async ({ page }) => {

    console.log("This is Tag Concept 3..");
});

test('Test 4@smoke', async ({ page }) => {

    console.log("This is Tag Concept 4..");
});

test('Test 5@smoke@sanity', async ({ page }) => {

    console.log("This is Tag Concept 5..");
});