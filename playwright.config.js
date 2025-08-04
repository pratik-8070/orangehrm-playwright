import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { open: 'never' }]]
});