import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // testDir: './tests',
  // testMatch: '**/*.test.ts',
  testMatch:'pomTests/addToCart.test.ts',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['html', { open: 'never', outputFolder:'playwright-report/index.html' }],
  ],
  
  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    headless: false, 
    video: 'on',
    screenshot: 'on', // Record video for failed tests
    viewport: { width: 1280, height: 720 },
    // launchOptions: {
    // slowMo: 500, // Slow down operations by 50ms
    // },
  }
});
