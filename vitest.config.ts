import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['app/**/*.test.ts', 'app/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules', 'dist', 'cms', '**/*.d.ts', '**/*.config.*'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@layouts': resolve(__dirname, './app/layouts'),
      '@pages': resolve(__dirname, './app/pages'),
      '@styles': resolve(__dirname, './app/styles'),
      '@utils': resolve(__dirname, './app/utils'),
      '@i18n': resolve(__dirname, './app/i18n'),
      '@assets': resolve(__dirname, './app/assets'),
      '@data': resolve(__dirname, './app/data'),
    },
  },
});
