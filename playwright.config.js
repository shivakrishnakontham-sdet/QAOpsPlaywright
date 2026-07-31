// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  //retries: 1,  // Retry Mechanism
  workers: 1, // Run tests in parallel across up to 6 workers
  fullyParallel: false,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    headless: true,
    navigationTimeout: 10000,
    actionTimeout: 15000,
    screenshot: 'on',   // Off/On/only-on-failure
    video: 'retain-on-failure',  // Off/On/Retain-on-failure
    ignoreHTTPSErrors: true,  // Ignore SSL issues (Your connection is not private)
    permissions: ['geolocation'],  // Allow location prompt
    trace: 'on',  // Off/On/Retain-on-failure
    // ...devices['Galaxy S24'],  // mobile responsive test
    // viewport: { width: 720, height: 720 },  // responsive layout
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    },
/*     {
      name: 'firefox',
      use: {
        browserName: 'firefox'
      }
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit'
      } 
    }*/
  ],
});
module.exports = config

  
