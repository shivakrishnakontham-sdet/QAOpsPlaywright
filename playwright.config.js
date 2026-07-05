// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  retries: 1,  //Retry Mechanisam 
  workers: 3, //Disable Parellel Mechanisam and set to 1 worker
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
      use: {
        browserName: 'chromium', 
        headless: false,   
        screenshot: 'on',   // Off/On/only-on-failure
        trace: 'on',  // Off/On/Retain-on-failure
        

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
},
});
module.exports = config

  
