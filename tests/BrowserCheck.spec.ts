import{test, expect} from '@playwright/test';
test('Git Code Check', async({page})=>{

    await page.goto('https://www.google.com/');
    expect(await page.title()).toContain('Google');
})