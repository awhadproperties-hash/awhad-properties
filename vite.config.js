import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// Base URL is automatically set by GitHub Actions
const base = process.env.BASE_URL || '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'thamir-siddik',
      project: 'javascript-react',
    }),
  ],
  build: {
    sourcemap: true,
  },
});

