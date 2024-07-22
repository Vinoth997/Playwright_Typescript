import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./",
  // testMatch: ["**/*.spec.ts"],
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { open: "always" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "on",
    video: "retain-on-failure",
    trace: "on",
  },

  /* Configure projects for major browsers */
  timeout: 60000, // Default timeout for all actions (60 seconds)
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          slowMo: 1000, // a 1000 milliseconds pause before each operation
        },
        viewport: { width: 1360, height: 768 }, // Set the screen resolution
        headless: false, // Run in headful mode
        ignoreHTTPSErrors: true, // Ignore HTTPS errors
        video: "retain-on-failure", // Record video on test failure
        navigationTimeout: 60000, // Default navigation timeout (60 seconds)
      },
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     launchOptions: {
    //       slowMo: 1000, // a 1000 milliseconds pause before each operation
    //     },
    //     viewport: { width: 1360, height: 768 }, // Set the screen resolution
    //     headless: false, // Run in headful mode
    //     ignoreHTTPSErrors: true, // Ignore HTTPS errors
    //     video: "retain-on-failure", // Record video on test failure
    //     navigationTimeout: 120000, // Increase navigation timeout to 120 seconds
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    /*
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
        launchOptions: {
          slowMo: 1000, // a 1000 milliseconds pause before each operation
        },
        viewport: { width: 1080, height: 2340 }, // Set the screen resolution
        headless: false, // Run in headful mode
        ignoreHTTPSErrors: true, // Ignore HTTPS errors
        video: "retain-on-failure", // Record video on test failure
        navigationTimeout: 60000, // Default navigation timeout (60 seconds)
      },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'],
      launchOptions: {
        slowMo: 1000, // a 1000 milliseconds pause before each operation
      },
      viewport: { width: 1080, height: 2340 }, // Set the screen resolution
      headless: false, // Run in headful mode
      ignoreHTTPSErrors: true, // Ignore HTTPS errors
      video: "retain-on-failure", // Record video on test failure
      navigationTimeout: 60000, // Default navigation timeout (60 seconds)
      },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
