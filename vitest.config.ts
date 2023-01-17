import { defineConfig } from 'vitest/config';

export default defineConfig({
  mode: 'test',
  test: {
    environment: 'jsdom'
  }
});
