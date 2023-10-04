import { defineConfig, devices } from '@playwright/test';



export default defineConfig({

  reporter : 'html',  
  // globalSetup: require.resolve("./global-setup"),
  testDir: "./tests/",
  // retries: 1,


use: {
    // Tell all tests to load signed-in state from 'storageState.json'.
    // storageState: 'storageState.json',

    trace: 'retain-on-failure',
    headless: false,
 

    browserName: "chromium",
    screenshot: "only-on-failure",
    video: "off",
    actionTimeout: 42000,
    navigationTimeout: 42000,
    viewport: null,
    launchOptions: {
      slowMo: 4500,
      args: ["--start-maximized"],

    }
  },
  timeout: 62000,
  globalTimeout: 62000,
 expect: {
   /**
    * Maximum time expect() should wait for the condition to be met.
    * For example in `await expect(locator).toHaveText();`
    */
   timeout: 80000,
},
 projects: [
  {
    name: 'Need Authentication',
    testDir: './tests/Authentication/Users/',    
  },
 ],
 /* Run tests in files in parallel */
 fullyParallel: true,
 /* Fail the build on CI if you accidentally left test.only in the source code. */

});