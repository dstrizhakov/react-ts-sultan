import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/react-ts-sultan/',
//   plugins: [react()],
// });

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-ts-sultan/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
