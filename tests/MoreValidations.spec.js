const { test, expect } = require('@playwright/test');
const { time } = require('node:console');

test.describe.configure({mode: 'serial'});   // Run the 3 tests parallelly/serial
test("@web popup validations", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //await page.goto("https://www.google.com/");
    //await page.goBack();
    //await page.goForward();
    //await page.reload();
    //await page.pause();
    //page.on('dialog', dialog  => dialog.accept()); //Accept/Dismiss the popup
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    //Handle java/javascript popup
    //await page.pause();
    await page.locator("#confirmbtn").click();

    //Mouse Hover
    await page.locator("#mousehover").hover();

    //Handleing frame
    const framespage = page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framespage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
})

test("Screenshot and Visual Comparision", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({ path: 'partialScreenshot.png' }); // Capture Partial Screenshot 
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'screenshot.png' })  // Capture Complete Screenshot
    await expect(page.locator("#displayed-text")).toBeHidden();

})
//Visua testing   //  Comparing with Old screenshot
//screenshot -> store -> screenshot--> 
test('visual', async({page})=>
{
    await page.goto("https:/www.google.com/");
expect(await page.screenshot()).toMatchSnapshot('landing.png');
}) ;

test('Launch Google Page', async({page})=>{
await page.goto("https://www.google.com")

});