import { expect, type Locator, type Page } from '@playwright/test';

let message1: any = "Hello Typescrit";
message1 = "Bye";
//console.log(message1);
let age1: number = 20;
//console.log(age1);
let isActive: boolean = false;

let numberArray: number[] = [1, 2, 3];

let data: any = "this coule be anything";
data = 10;

//Function
function add(a:number, b:number) :number
 {
    return a + b;
}
console.log(add(3, 4));

//Declare Object 
let user:{name:string, age:number, location:String}={name:"Shiva", age:34, location:"Delhi" };
console.log(user.location = "Hyderabad");

//Classes


class CartPage
{
    page: Page;
    cartProducts:Locator;
    productsText:Locator;
    cart:Locator;

   
constructor(page:any)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}