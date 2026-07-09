import { test, expect, chromium } from "@playwright/test"

test("Open the Application", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://www.google.com");
    
    await browser.close();
});

test('TC-05', async({page})=>{


 await page.goto('https://www.google.com/');
});
