import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Your test folder
  testDir: './tests',

  // Result folder
  outputDir: './tests/results',

  // Global timeout
  timeout: 30000,

  // Retry failed tests
  retries: 0,

  use: {
    // Laravel app URL
    baseURL: 'http://localhost:8000',

    // Show browser while running
    headless: false,

    // Auto screenshot on failure
    screenshot: 'only-on-failure',

    // Trace on retry
    trace: 'on-first-retry',

    // Open browser in maximized mode
    launchOptions: {
      args: ['--start-maximized'],
    },

    // Ignore HTTPS issues if any
    ignoreHTTPSErrors: true,
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
      },
    },
  ],

  // Reports
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    ['list'],
  ],
});