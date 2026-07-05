 const {test, expect} = require('@playwright/test');
const { log } = require('node:console');

 test('Browser Context-Validating Error Login', async ({page})=>
 {
    const email = "anshika@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForLoadState('networkidle');
    await  page.locator(".card-body b").first().waitFor();

    await page.locator(".card-body b").filter({hasText:"ZARA COAT 3"}).
    getbyrole("button",{name:"Add To Cart"}).click();
   
      await page.getbyrole("listitem").getbyrole("button",{name:"Cart"}).click();


      await page.locator("div li").first().waitFor();
      await expect(page.getByText("ZARA COAT 3")).isVisible();
    


        await page.getbyrole("button",{name:"Checkout"}).click();


//Handle Auto Suggestion dropdowns  
       await page.getbyplaceholder("Select Country").pressSequentially("ind");  //Page Locater Taken
       await page.getbyrole("button",{name:"India"}).nth(1).click();
       await page.getByText(".PLACE ORDER").click();
       await expect(page.getByText("Thank you fo the Order. ")).isVisible();
       
              
        
        //await page.pause();
  
        

})


