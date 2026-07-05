
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { OrdersHistoryPage } from './OrdersHistoryPage';
import { OrdersReviewPage } from "./OrdersReviewPage";
import { CartPage } from "./CartPage";
import { Page } from '@playwright/test';

export class POManager {
    loginpage: LoginPage;
    dashboardpage: DashboardPage;
    ordersHistoryPage: OrdersHistoryPage;
    ordersReviewPage: OrdersReviewPage;
    cartPage: CartPage;
    page: Page;


    constructor(page: any) {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);


    }

    getLoginPage() {
        return this.loginpage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getDashboardPage() {
        return this.dashboardpage;
    }
    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }
}
//module.exports = { POManager };
export default POManager

