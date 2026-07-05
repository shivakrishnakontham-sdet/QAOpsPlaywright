//Login UI
//test, cart-order, oeder details, order history

  const {test, expect} = require('@playwright/test');
  let webContext;
  //const { json } = require('node:stream/consumers');
  //const { log } = require('node:console');
    test.beforeAll(async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        await context.storageState({path: 'state.json'});
        webContext = await browser.newContext({storageState: 'state.json'});
      
    })

  test('Client App Login', async ()=>
  {
     const email = "";  
     const productName = "ZARA COAT 3";
     const page = await webContext.newPage();
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     const products = page.locator(".card-body");         
     //await  page.locator(".card-body b").first().waitFor();
     const titles = await  page.locator(".card-body b").allTextContents();
     console.log(titles);
     //Select the procuct Zara Coat 3 
     const count = await products.count();
 
     for(let i =0; i < count; i++)
     {
     if(await products.nth(i).locator("b").textContent() === productName)
        {
 //Add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
        }
     }
       await page.locator("[routerlink*='cart']").click();
       await page.locator("div li").first().waitFor();
        const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
         expect(bool).toBeTruthy();
         await page.locator("text=checkout").click();
 /* 
          await page.locator("[name='coupon']").fill("rahulshettyacademy");
          await page.locator("[.btn.btn-primary.mt-1']").click(); */
 
 
 //Handle Auto Suggestion dropdowns  
        await page.locator("[placeholder*='Country']").pressSequentially("ind");  //Page Locater Taken
        const dropdown = page.locator(".ta-results");   //Taken list of items in dropdown based on inpus valus
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
          for(let i=0; i<optionsCount; i++)
          {
             const text = await dropdown.locator("button").nth(i).textContent();
             if(text.trim() === "India")
             {
                 await dropdown.locator("button").nth(i).click();
                 break;
             }
          }
 
          expect(page.locator(".user__name [type='text']").first()).toHaveText(email); //Assertion validate the mail id
          await page.locator(".action__submit").click();
 
          await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); //Assertion to validate the order confirmation
       
          const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();  //Copy the order Id
          console.log(orderId);
 
 
 
          await page.locator("button[routerlink*='myorders']").click();
          await page.locator("tbody").waitFor();
          const rows = await page.locator("tbody tr");
 
          
         for (let i = 0; i < await rows.count(); ++i)
           {
         const rowOrderId = await rows.nth(i).locator("th").textContent();
             if (orderId.includes(rowOrderId)) 
             {
                await rows.nth(i).locator("button").first().click();
                break;
             }
           }
          const orderIdDetails = await page.locator(".col-text").textContent();
          expect(orderId.includes(orderIdDetails)).toBeTruthy();      
 
         //await page.pause();
 });

 test('@API Test case 2', async ()=>
  {
     const email = "";  
     const productName = "ZARA COAT 3";
     const page = await webContext.newPage();
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     const products = page.locator(".card-body");         
     //await  page.locator(".card-body b").first().waitFor();
     const titles = await  page.locator(".card-body b").allTextContents();
     console.log(titles);
  
  
  
    })


 
 