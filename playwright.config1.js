// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'node:cluster';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  //retries: 1,  //Retry Mechanisam 
  //workers: 1, //Disable Parellel Mechanisam and set to 1 worker
  /* Maximum time one test can run for  */
  //
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',

  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'oonly-on-failure',   // Off/On/only-on-failure
        trace: 'retain-on-failure',  // Off/On/Retain-on-failure 
        //...devices['iPhone 11 Pro']   
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        navigationTimeout: 10000,
        actionTimeout:15000,
        screenshot: 'on', // Off/On/only-on-failure
        video: 'retain-on-failure',  // Off/On/Retain-on-failure
        ignoreHttpsErrors: true,  //Ignonre the ssl Issue for website (Your connection is bit private - Advanced)
        Permissions: 'Geolocation',  //Allow the location in browser left top corner of the browser
        trace: 'on'
        //...devices['Galaxy S24'],  //we can check mobile responcive
        //Viewport : {width:720, height:720}  // We can check the web responsive
      }
    }

  ]
});
module.exports = config


