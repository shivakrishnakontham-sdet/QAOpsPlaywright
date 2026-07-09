import{test, expect, chromium} from '@playwright/test';
test('TC-01', async()=>{

const browser = await chromium.launch({headless: false});

const contextA = await browser.newContext();
const contextB = await browser.newContext();
const contextC = await browser.newContext();

const pageA1 = contextA.newPage();
(await pageA1).goto('https://www.google.com/');

const pageA2 = contextA.newPage();
(await pageA2).goto('https://rahulshettyacademy.com/practice');

const pageB = contextB.newPage();
(await pageB).goto('https://playwright.dev/');

const pageC1 = contextC.newPage();
(await pageC1).goto('https://rahulshettyacademy.com/loginpagePractise/');

const pageC2 = contextC.newPage();
(await pageC2).goto('https://www.google.com/');

});


test('TC-02', async({page})=>{

    await page.goto('https://accounts.saucelabs.com/am/XUI/#login/');

    await page.getByRole('textbox',{name: 'User Name'}).fill('Test@123');
    await page.getByRole('textbox',{name: 'Password'}).fill('Test@123');
    await page.getByRole('checkbox',{name: 'Remember username'});
   await expect(page.getByText('Sign in',{exact: true})).toHaveText('Sign in');
   const TV = await page.getByText('Sign in',{exact: true}).textContent();
   console.log(TV === 'Sign in' ? 'Validation Passed:Sign' : `Validation Failed, got: ${TV}`);
});

test('TC-03', async({page})=>{


 await page.goto('https://www.google.com/');
})

test('TC-04', async({page})=>{


 await page.goto('https://www.google.com/');
})

test('TC-05', async({page})=>{


 await page.goto('https://www.google.com/');
})