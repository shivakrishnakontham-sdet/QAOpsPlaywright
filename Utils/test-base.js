const base = require('@playwright/test');

// Extend Playwright's test with a fixture that provides test data
exports.customtest = base.test.extend({
    testDataForOrder: async ({}, use) => {
        await use({
            username: 'anshika@gmail.com',
            password: 'Iamking@000',
            productName: 'ZARA COAT 3'
        });
    }
});