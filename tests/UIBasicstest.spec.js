  const {test, expect} = require('@playwright/test');
const { request } = require('node:http');

 test('@web Browser ContextPlaywright test', async ({browser})=>
 {
 
    //chrome -plugngs / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    //page.route('**/*.css', route=>route.abort());  //  Block the css
    //page.route('**/*.{jpg, png, jpeg}', route=>route.abort());  //  Block the images
    const username=page.locator("#username");
    const signIn =page.locator("#signInBtn");
    const cardTitles=page.locator(".card-body a");

    page.on('request', request=> console.log(request.url()));  //All N/w rquest calls are printed
    page.on('response', response=> console.log(response.url(), response.status())); //All N/w response calls and responce codes are printed

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    //css selectors, type, fill
    await username.fill("rahulshetty");
    await page.locator("[type=password]").fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   //type  - fill
    await  username.fill("");
    await await username.fill("rahulshettyacademy");
    await signIn.click();
    await console.log("Application Login Successfully")
    console.log(await cardTitles.first().textContent());
                    //or      
    console.log(await cardTitles.nth(1).textContent());
      
//Access all the titles
       const allTitles =await cardTitles.allTextContents();
       console.log(allTitles); 
     
});

test('@web UI Controls', async ({page})=>
 {   

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username=page.locator("#username");
    const signIn =page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");  //Select static Dropdown
    const documentLink=page.locator("[href*=documents-request]");
    await dropdown.selectOption("consult")
   
    await page.locator(".radiotextsty").last().click();   //Select Radio button
    await page.locator("#okayBtn").click();
    
    console.log(await page.locator(".radiotextsty").last().isChecked());  ////Verify Radio button checked or not
    await expect(page.locator(".radiotextsty").last()).toBeChecked();    //  //assertion
  
    await page.locator("#terms").click()
    await expect(page.locator("#terms")).toBeChecked();  //Assertion for checking is it checked or not
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");  //Assertion for checking the blinking text

});

//Handling child windows
test('Child window handle', async ({browser})=>
{ 
    const context = await browser.newContext();
    const page = await context.newPage();
     const username=page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const documentLink=page.locator("[href*=documents-request]");
 
  //Handle child window and verify the text
  const [newpage] =await Promise.all([

    context.waitForEvent('page'),
    documentLink.click(),
  ])
    const text = await  newpage.locator(".red").textContent();
    const attayText =  text.split("@")
    const domain = attayText[1].split(" ")[0];
    //console.log(domain);
    await page.locator("#username").type(domain);
    await page.pause();
    console.log(await page.locator("#username").inputValue());



    
    console.log(text);

} )




/* 
console.log("Deepu Practise")

const {test} = require('@playwright/test');

  test('Tets case name', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

  }
    
  );
 */
