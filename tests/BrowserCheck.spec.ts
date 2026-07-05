import{test, expect} from '@playwright/test';
test('Git Code Check', async({page})=>{

    page.goto('https://www.google.com/');
    expect(await page.title()).toContain('Google');
})